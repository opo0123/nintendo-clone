const swiper = new Swiper(".visual-Swiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// 메뉴 1
// 메뉴에 마우스 호버시
const gnb = document.querySelector(".main-menu-list > li:first-child");
const headerbg = document.querySelector(".submenu1");
const inner = document.querySelector(".submenu1 .inner");
gnb.addEventListener("mouseenter", function () {
  headerbg.style.height = "383px";
  inner.style.opacity = "1";
  inner.style.visibility = "visible";
});
// 마우스가 떠날 때
gnb.addEventListener("mouseleave", function () {
  headerbg.style.height = "0px";
  inner.style.opacity = "0";
  inner.style.visibility = "hidden";
});

// 메뉴 4
// 메뉴에 마우스 호버시
const gnb4 = document.querySelector(".main-menu-list > li:nth-child(4)");
const headerbg4 = document.querySelector(".submenu4");
const inner4 = document.querySelector(".submenu4 .inner");
gnb4.addEventListener("mouseenter", function () {
  headerbg4.style.height = "383px";
  inner4.style.opacity = "1";
  inner4.style.visibility = "visible";
});
// 마우스가 떠날 때
gnb4.addEventListener("mouseleave", function () {
  headerbg4.style.height = "0px";
  inner4.style.opacity = "0";
  inner4.style.visibility = "hidden";
});
