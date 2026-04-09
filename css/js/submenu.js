const menuWrap = document.querySelector(".main-menu");

menuWrap.addEventListener("mouseenter", () => {
  menuWrap.classList.add("active");
});

menuWrap.addEventListener("mouseleave", () => {
  menuWrap.classList.remove("active");
});