let tab = document.querySelector(".tab_form");
let tabHeader = document.querySelector(".tab_header");
let tabbody = document.querySelector(".tab_body");
let tabHeaderElement = tab.querySelectorAll(".tab_header > div");
let tabbodyElements = tab.querySelectorAll(".tab_body > div");

console.log(tabHeaderElement);
for (let i = 0; i < tabHeaderElement.length; i++) {
  tabHeaderElement[i].addEventListener("click", function () {
    tabHeader.querySelector(".active").classList.remove("active");
    tabHeaderElement[i].classList.add("active");
    tabbody.querySelector(".active").classList.remove("active");
    tabbodyElements[i].classList.add("active");
  });
}
