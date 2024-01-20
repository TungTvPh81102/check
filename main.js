let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-circle-xmark");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-circle-xmark");
  navbar.classList.remove("active");
};
