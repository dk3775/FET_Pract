// use event handling to view hidden block

let div1 = document.getElementById("list1");
let div2 = document.getElementById("list2");
let div3 = document.getElementById("list3");

let submenu1 = document.getElementById("submenu1");
let submenu2 = document.getElementById("submenu2");
let submenu3 = document.getElementById("submenu3");

let c1 = 0;
div1.addEventListener("click", function () {
  if (c1 == 0) {
    submenu1.style.display = "block";
    submenu2.style.display = "none";
    submenu3.style.display = "none";
    c1 = 1;
    c2 = c3 = 0;
  } else {
    submenu1.style.display = "none";
    c1 = 0;
  }
});

let c2 = 0;
div2.addEventListener("click", function () {
  if (c2 == 0) {
    submenu2.style.display = "block";
    submenu1.style.display = "none";
    submenu3.style.display = "none";
    c1 = c3 = 0;
    c2 = 1;
  } else {
    submenu2.style.display = "none";
    c2 = 0;
  }
});

let c3 = 0;
div3.addEventListener("click", function () {
  if (c3 == 0) {
    submenu3.style.display = "block";
    submenu1.style.display = "none";
    submenu2.style.display = "none";
    c1 = c2 = 0;
    c3 = 1;
  } else {
    submenu3.style.display = "none";
    c3 = 0;
  }
});
