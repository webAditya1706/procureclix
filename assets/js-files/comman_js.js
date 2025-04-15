document.addEventListener("DOMContentLoaded", function () {
  // Password eye script start
  const logPasswordInput = document.getElementById("logInputPassword");
  const logPassEye = document.getElementById("logPassEye");

  if (logPasswordInput && logPassEye) {
    logPassEye.addEventListener("click", function () {
      if (logPasswordInput.type === "password") {
        logPasswordInput.type = "text";
        logPassEye.classList.remove("bi-eye-fill");
        logPassEye.classList.add("bi-eye-slash-fill");
      } else {
        logPasswordInput.type = "password";
        logPassEye.classList.remove("bi-eye-slash-fill");
        logPassEye.classList.add("bi-eye-fill");
      }
    });
  }
  // Password eye script end

  // Comman header link
  const navLinks = document.querySelectorAll("#navbarNav .nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((nav) => nav.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Initialize all tooltips on the page
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
});
