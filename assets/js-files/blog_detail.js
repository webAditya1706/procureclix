$(document).ready(() => {
  const API_BASE = "https://procureclix.com/blog/wp-json/wp/v2/posts?_embed";

  const urlParams = new URLSearchParams(window.location.search);
  const blogId = urlParams.get("id");

  if (blogId) {
    showLoader();
    $.ajax({
      url: `${API_BASE}&include=${blogId}`,
      method: "GET",
      success: function (data) {
        hideLoader();

        if (data.length > 0) {
          const post = data[0];
          console.log(post, "===============> post");

          const imageUrl =
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "https://via.placeholder.com/600x300";

          const blogHTML = `
            <div class="blog-detail-wrapper">
              <h2 class="fw-bold mb-3">${post.title.rendered}</h2>
              <img src="${imageUrl}" class="img-fluid mb-4" alt="Blog Image" loading="lazy"/>
              <div class="col-md-8">
                <div class="blog-content">${post.content.rendered}</div>
              </div>
            </div>
          `;

          $("#blog_detail").html(blogHTML);
        } else {
          $("#blog_detail").html("<p>Blog post not found.</p>");
        }
      },
      error: function () {
        hideLoader();
        $("#blog_detail").html("<p>Error loading blog post.</p>");
      },
    });
  } else {
    $("#blog_detail").html("<p>No blog ID provided in URL.</p>");
  }

  function showLoader() {
    $("#preloader").fadeIn();
  }

  function hideLoader() {
    setTimeout(() => {
      $("#preloader").fadeOut();
    }, 500);
  }
});
