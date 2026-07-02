const toggleMenu = document.getElementById("toggle-menu");
const navbar = document.getElementById("navbar-nav");

toggleMenu.addEventListener("click", function () {
  navbar.classList.toggle("active");
  toggleMenu.classList.toggle("open");
});

document.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
    navbar.style.backgroundColor = "rgba(19, 0, 190, 0.7)";
  } else {
    navbar.style.backgroundColor = "rgba(19, 0, 190, 0.3)";
  }
});

AOS.init();
