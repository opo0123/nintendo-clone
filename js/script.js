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

// 메뉴 3
// 메뉴에 마우스 호버시
const gnb2 = document.querySelector(".main-menu-list > li:nth-child(2)");
const headerbg2 = document.querySelector(".submenu2");
const inner2 = document.querySelector(".submenu2 .inner");
gnb2.addEventListener("mouseenter", function () {
  headerbg2.style.height = "280px";
  inner2.style.opacity = "1";
  inner2.style.visibility = "visible";
});
// 마우스가 떠날 때
gnb2.addEventListener("mouseleave", function () {
  headerbg2.style.height = "0px";
  inner2.style.opacity = "0";
  inner2.style.visibility = "hidden";
});

// 메뉴 3
// 메뉴에 마우스 호버시
const gnb3 = document.querySelector(".main-menu-list > li:nth-child(3)");
const headerbg3 = document.querySelector(".submenu3");
const inner3 = document.querySelector(".submenu3 .inner");
gnb3.addEventListener("mouseenter", function () {
  headerbg3.style.height = "390px";
  inner3.style.opacity = "1";
  inner3.style.visibility = "visible";
});
// 마우스가 떠날 때
gnb3.addEventListener("mouseleave", function () {
  headerbg3.style.height = "0px";
  inner3.style.opacity = "0";
  inner3.style.visibility = "hidden";
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

// 메뉴 5
// 메뉴에 마우스 호버시
const gnb5 = document.querySelector(".main-menu-list > li:nth-child(5)");
const headerbg5 = document.querySelector(".submenu5");
const inner5 = document.querySelector(".submenu5 .inner");
gnb5.addEventListener("mouseenter", function () {
  headerbg5.style.height = "220px";
  inner5.style.opacity = "1";
  inner5.style.visibility = "visible";
});
// 마우스가 떠날 때
gnb5.addEventListener("mouseleave", function () {
  headerbg5.style.height = "0px";
  inner5.style.opacity = "0";
  inner5.style.visibility = "hidden";
});

// 메뉴 7 - 검색창
// 메뉴에 마우스 호버시
const gnb7 = document.querySelector(".main-menu-list > li:nth-child(7)");
const headerbg7 = document.querySelector(".submenu7");
const inner7 = document.querySelector(".submenu7 .inner");
gnb7.addEventListener("mouseenter", function () {
  headerbg7.style.height = "124px";
  inner7.style.opacity = "1";
  inner7.style.visibility = "visible";
});
// 마우스가 떠날 때
gnb7.addEventListener("mouseleave", function () {
  headerbg7.style.height = "0px";
  inner7.style.opacity = "0";
  inner7.style.visibility = "hidden";
});
