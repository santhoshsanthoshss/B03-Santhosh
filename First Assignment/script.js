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

// const tab = document.querySelector(".tab_form");
// const tabHeader = document.querySelector(".tab_header");
// const tabbody = document.querySelector(".tab_body");

// tabHeader.addEventListener("click", function (event) {
//   if (event.target.tagName === "DIV") {
//     const clickedTabHeader = event.target;
//     // console.log(clickedTabHeader);
//     const index = Array.from(tabHeader.children).indexOf(clickedTabHeader);
//     tabHeader.querySelector(".active").classList.remove("active");
//     clickedTabHeader.classList.add("active");
//     tabbody.querySelector(".active").classList.remove("active");
//     tabbody.children[index].classList.add("active");
//   }
// });
