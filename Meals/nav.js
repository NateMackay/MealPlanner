
// navigation functions
// This will display/hide the navigation menu
function switchNav() { 
  var width = screen.width * 0.8;
  if (document.getElementById("mySidenav").style.width == "" || 
      document.getElementById("mySidenav").style.width == "0px") {
    // open navigation
    document.getElementById("mySidenav").style.width = width + "px";
    document.getElementById("hamburgerIcon").style.marginLeft = width + "px";
    switchIcon();
  } else { 
    // close navigation
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("hamburgerIcon").style.marginLeft = "0px";
    switchIcon();
  }
}

// change the icon from x to hamburger
function switchIcon() {
  var nav = document.getElementsByClassName('navIcon');
  nav[0].classList.toggle("change");
}

// this takes the web page focus to the day selected from the menu
function goTo(day) { 
  document.getElementById(day).scrollIntoView(); 
  // document.getElementById('html').scrollIntoView();
}
 