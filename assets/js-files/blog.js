$(document).ready(() => {
  const API_URL = "https://procureclix.com/blog/wp-json/wp/v2/posts?_embed";
  const POSTS_PER_PAGE = 3;

  function fetchBlogs(page = 1) {
    showLoader();
    $.ajax({
      url: API_URL,
      method: "GET",
      data: {
        per_page: POSTS_PER_PAGE,
        page: page,
      },
      success: function (data, textStatus, request) {
        hideLoader();
        $("#blog-container").empty();

        data.forEach((post) => {
          const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "https://via.placeholder.com/300x180";

          const blogHTML = `
            <div class="col-md-6 col-xl-4">
              <div class="blog__card" data-id="${post.id}">
                <img src="${imageUrl}" alt="Blog Image" />
                <div class="blog__card-content">
                  <div class="blog__card-title">${post.title.rendered}</div>
                  <div class="blog__card-text">${post.excerpt.rendered}</div>
                </div>
              </div>
            </div>`;
          $("#blog-container").append(blogHTML);
        });

        const totalPages = parseInt(request.getResponseHeader("X-WP-TotalPages")) || 1;
        setupPagination(totalPages, page);
      },
      error: function (err) {
        console.error("Error loading blogs:", err);
        hideLoader();
      },
    });
  }

  function setupPagination(totalPages, currentPage) {
    let paginationHTML = "";

    if (currentPage > 1) {
      paginationHTML += `<a href="#" class="page-link" data-page="${currentPage - 1}">&laquo;</a>`;
    } else {
      paginationHTML += `<a href="#" class="disabled">&laquo;</a>`;
    }

    for (let i = 1; i <= totalPages; i++) {
      paginationHTML += `<a href="#" class="page-link ${i === currentPage ? "active" : ""}" data-page="${i}">${i}</a>`;
    }

    if (currentPage < totalPages) {
      paginationHTML += `<a href="#" class="page-link" data-page="${currentPage + 1}">&raquo;</a>`;
    } else {
      paginationHTML += `<a href="#" class="disabled">&raquo;</a>`;
    }

    $("#pagination").html(paginationHTML);
  }

  // Handle card click
  $(document).on("click", ".blog__card", function () {
    const blogId = $(this).data("id");
    if (blogId) {
      window.location.href = `blog-detail.html?id=${blogId}`;
    }
  });

  // Handle pagination click
  $(document).on("click", ".page-link", function (e) {
    e.preventDefault();
    const selectedPage = $(this).data("page");
    if (selectedPage) {
      fetchBlogs(selectedPage);
    }
  });

  // Loader functions
  function showLoader() {
    $("#preloader").fadeIn();
  }

  function hideLoader() {
    setTimeout(() => {
      $("#preloader").fadeOut();
    }, 500);
  }

  // Initial Load
  fetchBlogs(1);
});
