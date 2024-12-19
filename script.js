// Sticky Navigation Menu
window.onscroll = () => {
  const nav = document.querySelector("nav");
  const scrollBtn = document.querySelector(".scroll-button a");
  const scrolled = document.documentElement.scrollTop > 20;

  nav.classList.toggle("sticky", scrolled);
  scrollBtn.style.display = scrolled ? "block" : "none";
};

// Side Navigation Menu
const body = document.querySelector("body");
const navBar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const navLinks = document.querySelectorAll(".menu li a");

// Toggle side navigation
const toggleNavMenu = (isOpen) => {
  navBar.classList.toggle("active", isOpen);
  menuBtn.style.opacity = isOpen ? "0" : "1";
  menuBtn.style.pointerEvents = isOpen ? "none" : "auto";
  body.style.overflow = isOpen ? "hidden" : "auto";
};

// Open side navigation
menuBtn.onclick = () => toggleNavMenu(true);

// Close side navigation
cancelBtn.onclick = () => toggleNavMenu(false);
navLinks.forEach((link) => link.addEventListener("click", () => toggleNavMenu(false)));
