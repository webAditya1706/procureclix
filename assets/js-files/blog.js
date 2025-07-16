$(document).ready(() => {
  $("#pagination_contener").empty();


  const POSTS_PER_PAGE = 3;
  $("#blog-container").empty();
  $("#blog-container").append(`
    <div class="col-12">
    <div class="book_loader">
    <img src="/assets/images/ProcureClix-unscreen.gif" alt="ProcureClix-unscreen" srcset="/assets/images/ProcureClix-unscreen.gif">    
    </div>
    </div>
    `);
    
    const API_URL = "https://procureclix.com/blog/wp-json/wp/v2/posts?_embed";
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
  <div class="blog__card" data-id="${post.slug}">
    <img src="${imageUrl}" alt="Blog Image" class="mt-0" />
    <div class="blog__card-content">
      <div class="blog__card-title">${post.title.rendered}</div>
      <div class="blog__card-text">${post.excerpt.rendered.substring(3, 300)}</div>
    </div>
  </div>
`;


          $("#blog-container").append(blogHTML);
        });
        // if ($(".blog_carosal").hasClass("slick-initialized")) {
        //   $(".blog_carosal").slick("unslick");
        // }
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
      paginationHTML += `<a href="#" class="page-link" data-page="${currentPage - 1
        }">&laquo;</a>`;
    } else {
      paginationHTML += `<a href="#" class="disabled">&laquo;</a>`;
    }

    for (let i = 1; i <= totalPages; i++) {
      paginationHTML += `<a href="#" class="page-link ${i === currentPage ? "active" : ""
        }" data-page="${i}">${i}</a>`;
    }

    if (currentPage < totalPages) {
      paginationHTML += `<a href="#" class="page-link" data-page="${currentPage + 1
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
    $("#pagination_contener").append(
      `
             <div type="button" class="glider-prev position-static slick-prev"><div  class"my-3">«</div></div>
             <div type="button" class="glider-next position-static slick-next"><div class"my-3">»</div></div>
            `
    );
    const gliderElement = document.querySelector('.glider');
    const prevButton = document.querySelector('.glider-prev');
    const nextButton = document.querySelector('.glider-next');

    const glider = new Glider(document.querySelector('.glider'), {
      slidesToShow: 3,
      slidesToScroll: 1,
      draggable: true,
      dots: '#dots',
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      },
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 180,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    const updateButtonState = () => {
      const scrollLeft = glider.scrollLeft;
      const maxScrollLeft = glider.maxScrollLeft;

      // Enable/Disable based on actual scroll position
      prevButton.disabled = scrollLeft <= 0;
      nextButton.disabled = scrollLeft >= maxScrollLeft;
    };

    // Listen for Glider events to update button states
    gliderElement.addEventListener('glider-animated', updateButtonState);
    gliderElement.addEventListener('glider-loaded', updateButtonState);
    gliderElement.addEventListener('glider-refresh', updateButtonState);

    // Initial check after DOM is ready
    setTimeout(updateButtonState, 100);

  };


});
