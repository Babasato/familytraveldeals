const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

const menuToggle = document.querySelector("#menu-btn");
const menu = document.querySelector(".nav__links");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active"); // Toggle the 'active' class to show/hide the menu
  });
}
// Scroll to top functionality
const backToTopButton = document.getElementById("backToTop");

backToTopButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default anchor click behavior
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scroll effect
  });
});
