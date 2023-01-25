// button variable
var dis_menu = document.querySelector(".dis-menu");
// nav-bar variable
var header_top = document.querySelector(".nav-bar");
// close btn
var close_btn = document.querySelector(".close-btn");

dis_menu.addEventListener("click", function () {
  // classList -> property
  // toggle() -> it is function used to add or remove
  //   header_top.classList.toggle("menu-show");

  header_top.classList.add("menu-show");
});

close_btn.addEventListener("click", function () {
  header_top.classList.remove("menu-show");
});
