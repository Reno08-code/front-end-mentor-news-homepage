const openMenu = document.querySelector(".open-button")
const closeMenu = document.querySelector(".close-button")
const navBar = document.querySelector(".navbar-nav")
function openNav(){
    navBar.style.display = "block";
}
function closeNav(){
    navBar.style.display = "none";
}

/* or you can set the width of the navbar-nav in the media query to 0,and use the follwoing js 

function openNav() {
  document.getElementById("navBar").style.width = "100%";
}

function closeNav() {
  document.getElementById("navBar").style.width = "0%";
}*/