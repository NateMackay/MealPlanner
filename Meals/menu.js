const _swipe = document.querySelector('#swiper'); 
const totalSections = _swipe.children.length; 
let initialX = 0; 
let i = null; 

_swipe.style.setProperty('--selectionNumber', totalSections);
_swipe.addEventListener('touchstart', initial, false);
_swipe.addEventListener('touchend', moveIt, false);
// for testing
_swipe.addEventListener('mousedown', initial, false);
_swipe.addEventListener('mouseup', moveIt, false);

function initial(item) { 
  initialX = (item.changedTouches ? item.changedTouches[0] : item).clientX;
};

function moveIt(item) {
  if (initialX || initialX === 0) { 
    let changeInX = (item.changedTouches ? item.changedTouches[0] : item).clientX - initialX, sign = Math.sign(changeInX);

    if ((i > 0 || sign < 0) || (i < totalSections - 1 || sign > 0)) { 
      _swipe.style.setProperty('--index', i -= sign);
    }

    // reset initial x
    initialX = null;
  }
};


//navigation functions
function switchNav() { 
  if (document.getElementById("mySidenav").style.width != "200px") {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
    switchIcon();

    //document.getElementById("main").style.transition = "transform 1s";
  } else {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    switchIcon();
  }
}

function switchIcon() {
  var nav = document.getElementsByClassName('navIcon');
  nav[0].classList.toggle("change");
}