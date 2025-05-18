const menuToggle = document.getElementById("menu-toggle");
const openIcon = document.getElementById("menu-open-icon");
const closeIcon = document.getElementById("menu-close-icon");
const menuLinks = document.getElementById("menu-links");

menuToggle.addEventListener("click", () => {
  const isOpen = openIcon.style.display === "none";

  if (isOpen) {
    // Close menu
    openIcon.style.display = "inline";
    closeIcon.style.display = "none";
    menuLinks.style.height = "0";
  } else {
    // Open menu
    openIcon.style.display = "none";
    closeIcon.style.display = "inline";
    menuLinks.style.height = "278.987px";
  }
});

// Animation

window.addEventListener("load", () => {
  const titleWrapper = document.getElementById("heroTitle");
  setTimeout(() => {
    titleWrapper.classList.add("animate");
  }, 500);
});
