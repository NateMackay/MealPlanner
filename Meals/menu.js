
//navigation functions
function switchNav() { 
  // open navigation
  if (document.getElementById("mySidenav").style.width != "200px") {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("hamburgerIcon").style.marginLeft = "200px";
    switchIcon();
  } else { 
    // close navigation
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("hamburgerIcon").style.marginLeft = "0";
    switchIcon();
  }
}

// change the icon from x to hamburger
function switchIcon() {
  var nav = document.getElementsByClassName('navIcon');
  nav[0].classList.toggle("change");
}

// this takes the focus to the day selected from the menu
function goTo(day) { 
  document.getElementById(day).scrollIntoView(); 
  document.getElementById('html').scrollIntoView();
}
