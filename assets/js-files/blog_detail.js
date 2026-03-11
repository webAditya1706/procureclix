$(document).ready(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const blogId = urlParams.get("blogPage");

  const iframeWrapper = $("#blog_detail");

//   iframeWrapper.append(`
//   <div class="col-12">
//     <div class="book_loader">
//       <img src="/assets/images/ProcureClix-unscreen.gif" alt="ProcureClix-unscreen" srcset="/assets/images/ProcureClix-unscreen.gif">    
//     </div>
//   </div>
// `);

  if (blogId) {

    const canonicalUrl = `https://procureclix.com/resources/blog/${blogId}`;
    
    let $canonicalLink = $('link[rel="canonical"]');

    if ($canonicalLink.length) {
      $canonicalLink.attr('href', canonicalUrl);
    } else {
      $('head').append(`<link rel="canonical" href="${canonicalUrl}" />`);
    }

    showLoader();

    //   $.ajax({
    //     url: `${API_BASE}&include=${blogId}`,
    //     method: "GET",
    //     success: function (data) {
    //       hideLoader();

    //       if (data.length > 0) {
    //         const post = data[0];
    //         console.log(post, "===============> post");

    //         const imageUrl =
    //           post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    //           "https://via.placeholder.com/600x300";

    //         const blogHTML = `
    //           <div class="blog-detail-wrapper">
    //             <h2 class="fw-bold mb-3">${post.title.rendered}</h2>
    //             <img src="${imageUrl}" class="img-fluid mb-4" alt="Blog Image" loading="lazy"/>
    //             <div class="col-md-8">
    //               <div class="blog-content">${post.content.rendered}</div>
    //             </div>
    //           </div>
    //         `;

    //         $("#blog_detail").html(blogHTML);
    //       } else {
    //         $("#blog_detail").html("<p>Blog post not found.</p>");
    //       }
    //     },
    //     error: function () {
    //       hideLoader();
    //       $("#blog_detail").html("<p>Error loading blog post.</p>");
    //     },
    //   });
    // }

    const iframe = $(`
          <iframe
            src="https://procureclix.com/blog/${blogId}"
            frameborder="0"
            class="iframe_doc_detail"
            onload="hideBookLoader()"
          ></iframe>
        `);
    setTimeout(() => {
      iframeWrapper.empty();
      iframeWrapper.append(iframe);
    },3000)
  } else {
    hideBookLoader()
    iframeWrapper.html("<p>No blog ID provided in URL.</p>");
  }

  function showLoader() {
    $("#preloader").fadeIn();
  }

  function hideBookLoader(){
    $('.book_loader_cntner').addClass("d-none")
  }

  window.hideLoader = function () {
    setTimeout(() => {
      $("#preloader").fadeOut();
    }, 500);
  };

   window.hideBookLoader = function () {
    $('.book_loader_cntner').addClass("d-none")   
  };

  
  // function hideBookLoader(){
  //   $('.book_loader_cntner').addClass("d-none")
  // }
});
