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

// ✅ Accordian This script will automatically change the icon to + or - based on the collapse state
document.querySelectorAll(".accordion-item").forEach(function (item) {
  // Whenever an accordion is shown
  item.addEventListener("show.bs.collapse", function () {
    // Reset all icons to "+"
    document.querySelectorAll(".icon").forEach(function (icon) {
      icon.textContent = "+";
    });
    // Change the current icon to "-"
    item.querySelector(".icon").textContent = "-";
  });

  // Whenever an accordion is hidden
  item.addEventListener("hide.bs.collapse", function () {
    item.querySelector(".icon").textContent = "+";
  });
});

// accordian end
