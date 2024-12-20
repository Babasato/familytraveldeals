document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  const bookingType = document.getElementById("booking-type");

  if (menuBtn && navLinks) {
    const menuBtnIcon = menuBtn.querySelector("i");

    menuBtn.addEventListener("click", (e) => {
      navLinks.classList.toggle("open");

      const isOpen = navLinks.classList.contains("open");
      menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-line"
      );
    });

    navLinks.addEventListener("click", (e) => {
      navLinks.classList.remove("open");
      menuBtnIcon.setAttribute("class", "ri-menu-line");
    });
  }

  if (bookingType) {
    bookingType.addEventListener("click", (e) => {
      Array.from(bookingType.getElementsByTagName("div")).forEach((item) => {
        item.classList.remove("active");
      });

      e.target.classList.add("active");
    });
  }

  // Initialize Swiper
  new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
  });

  // Initialize ScrollReveal
  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  // Reveal header container
  ScrollReveal().reveal(".header__container h1", { ...scrollRevealOption });
  ScrollReveal().reveal(".header__container p", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".header__container .booking", {
    ...scrollRevealOption,
    delay: 1000,
  });

  // Reveal service container
  ScrollReveal().reveal(".service__card", {
    duration: 1000,
    interval: 500,
  });

  // Reveal offer container
  ScrollReveal().reveal(".offer__card", {
    ...scrollRevealOption,
    interval: 500,
  });
});
