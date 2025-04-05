// Password eye script start
const logPasswordInput = document.getElementById("logInputPassword");
const logPassEye = document.getElementById("logPassEye");

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

// Password eye script end

// comman header link
const navLinks = document.querySelectorAll("#navbarNav .nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove active class from all links
    navLinks.forEach((nav) => nav.classList.remove("active"));

    // Add active class to the clicked link
    this.classList.add("active");
  });
});

// comman header link

