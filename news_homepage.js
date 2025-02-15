const hamburgerMenu = document.getElementById("hamburger-menu");
const closeMenu = document.getElementById("close-menu");
const menuLayout = document.querySelector(".menu-layout");
const menuList = document.querySelector(".menu-list");
let menuOpenedState = false;

hamburgerMenu.style.display = "none";
hamburgerMenu.onclick = openMenuLayout;

closeMenu.style.display = "none";
closeMenu.onclick = closeMenuLayout;

menuList.style.transition = "width 200ms";

function changeLayout(x) {
  if(x.matches) {
    document.querySelectorAll("li").forEach(element => {
      element.style.display = "block";
    });
    if(menuOpenedState) {
      closeMenu.style.display = "block";
      hamburgerMenu.style.display = "none";
      menuLayout.style.width = "100%";
      menuList.style.width = "60%";
      document.body.style.overflow = "hidden"
      document.body.style.height = "100%";
    } else {
      closeMenu.style.display = "none";
      hamburgerMenu.style.display = "block";
      menuLayout.style.width = "0";
      menuLayout.style.overflow = "hidden";
      menuList.style.width = "0";
      menuList.style.overflow = "hidden";
      document.body.style.overflow = "initial"
      document.body.style.height = "initial";
    }
  } else {
    document.querySelectorAll("li").forEach(element => {
      element.style.display = "inline-block";
    });
    closeMenu.style.display = "none";
    hamburgerMenu.style.display = "none";
    menuLayout.style.width = "unset";
    menuList.style.width = "unset";
    menuLayout.style.transitionDelay = "initial";
    document.body.style.overflow = "initial"
    document.body.style.height = "initial";
  }
}

var x = window.matchMedia("(max-width: 48em)");

changeLayout(x);

x.addEventListener("change", function() {
  changeLayout(x);
});

function openMenuLayout() {
  menuLayout.style.transitionDelay = "0ms";
  menuLayout.style.width = "100%";
  menuList.style.width = "60%";
  hamburgerMenu.style.display = "none";
  closeMenu.style.display = "block";
  document.body.style.overflow = "hidden"
  document.body.style.height = "100%";
  menuOpenedState = true;
}

function closeMenuLayout() {
  menuLayout.style.transitionDelay = "200ms";
  menuLayout.style.width = "0";
  menuList.style.width = "0";
  hamburgerMenu.style.display = "block";
  closeMenu.style.display = "none";
  document.body.style.overflow = "initial"
  document.body.style.height = "initial";
  menuOpenedState = false;
}
