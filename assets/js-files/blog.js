$(document).ready(() => {
  const API_URL = "https://procureclix.com/blog/wp-json/wp/v2/posts?_embed";
  const POSTS_PER_PAGE = 3;
  $("#blog-container").empty();
  $("#blog-container").append(`
  <div class="col-12">
    <div class="book_loader">
      <img src="/assets/images/ProcureClix-unscreen.gif" alt="ProcureClix-unscreen" srcset="/assets/images/ProcureClix-unscreen.gif">    
    </div>
  </div>
`);
  function fetchBlogs(page = 1) {
    // showLoader();
    $.ajax({
      url: API_URL,
      method: "GET",
      // data: {
      //   per_page: POSTS_PER_PAGE,
      //   page: page,
      // },
      success: function (data, textStatus, request) {
        // hideLoader();
        $("#blog-container").empty();

        data.forEach((post) => {
          console.log(post, "=========post");

          const imageUrl =
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "https://via.placeholder.com/300x180";

          const blogHTML = `
            <div class="col-md-6 col-xl-4 mx-2">
             <!-- <div class="blog__card" data-id="${post.id}"> --!>
              <div class="blog__card" data-id="${post.slug}">
                <img src="${imageUrl}" alt="Blog Image" class="mt-0" />
                <div class="blog__card-content">
                  <div class="blog__card-title">${post.title.rendered}</div>
                  <div class="blog__card-text">${post.excerpt.rendered}</div>
                </div>
              </div>
            </div>`;
          $(".blog_carosal").append(blogHTML);
        });
        if ($(".blog_carosal").hasClass("slick-initialized")) {
          $(".blog_carosal").slick("unslick");
        }
        loadCarosalSlider();
        // const totalPages = parseInt(request.getResponseHeader("X-WP-TotalPages")) || 1;
        // setupPagination(totalPages, page);
      },
      error: function (err) {
        console.error("Error loading blogs:", err);
        // hideLoader();
      },
    });
  }

  function setupPagination(totalPages, currentPage) {
    let paginationHTML = "";

    if (currentPage > 1) {
      paginationHTML += `<a href="#" class="page-link" data-page="${
        currentPage - 1
      }">&laquo;</a>`;
    } else {
      paginationHTML += `<a href="#" class="disabled">&laquo;</a>`;
    }

    for (let i = 1; i <= totalPages; i++) {
      paginationHTML += `<a href="#" class="page-link ${
        i === currentPage ? "active" : ""
      }" data-page="${i}">${i}</a>`;
    }

    if (currentPage < totalPages) {
      paginationHTML += `<a href="#" class="page-link" data-page="${
        currentPage + 1
      }">&raquo;</a>`;
    } else {
      paginationHTML += `<a href="#" class="disabled">&raquo;</a>`;
    }

    $("#pagination").html(paginationHTML);
  }

  // Handle card click
  $(document).on("click", ".blog__card", function () {
    const blogId = $(this).data("id");
    if (blogId) {
      let url = `blog-detail/?blogPage=${blogId}`;
      console.log(url, "============$(this).url");
      window.location.href = url;
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

  const loadCarosalSlider = () => {
    $(".blog_carosal").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
      nextArrow: '<button type="button" class="slick-next">&#10095;</button>',
      // auto play
      autoplay: true,
      autoplaySpeed: 2000,

      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  };
});
