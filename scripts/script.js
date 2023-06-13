window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const logoImg = document.querySelector(".desktop-logo");
  const navItems = document.querySelectorAll(".nav-item");
  const ctaHeader = this.document.querySelector(".hdr-cta-btn");
  const ham = document.querySelector(".ham-burger");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 130) {
    header.classList.add("scrolled");
    header.classList.add("box-shadow");
    ham.style.color = "black";
    logoImg.src = "images/Logo-&-Icons/logo-black.png"; // Replace with the path to your new logo image
    navItems.forEach((item) => {
      item.style.transition = "color 0.3s";
      item.style.color = "black";
    });
    ctaHeader.style.color = "black";
  } else {
    header.classList.remove("box-shadow");
    header.classList.remove("scrolled");
    logoImg.src = "images/Logo-&-Icons/logo-white.png"; // Replace with the path to your original logo image
    navItems.forEach((item) => (item.style.color = "white"));
    ctaHeader.style.color = "white";
    ham.style.color = "white";
  }
});
// DropDown
document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;
  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }
  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });
});

// Testmonials

// Preload
let preloader = document.querySelector(".preloader");
if (preloader) {
  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.classList.remove("preloader");
    }, 1000); // Delay of 5 seconds (5000 milliseconds)
  });
}

// Side bar PopUp

document.addEventListener("click", (e) => {
  const isSlideBarButton = e.target.matches("[data-hamburger-button]");
  const currentSideBar = document.querySelector("[data-sidebar]");

  if (isSlideBarButton) {
    currentSideBar.classList.toggle("side-bar-opened");
  } else if (
    !currentSideBar.contains(e.target) &&
    !e.target.matches(".hdr-cta-btn")
  ) {
    currentSideBar.classList.remove("side-bar-opened");
  }
});
// Swiper Js
