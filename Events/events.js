

function moreRoom(list) { 
  document.getElementById(list).style.lineHeight = "40px";
}

function lessRoom(list) { 
  document.getElementById(list).style.lineHeight = "19px";

  //this is how to use js to change css for class objects 
  var hide = document.getElementsByClassName('hideMe');
  for (var i = 0; i < hide.length; i++) { 
    hide[i].style.display = "none";
  }
  document.getElementById(list).style.background = "white";
}

function showMe(item) { 
  if (document.getElementById(item).style.display != "initial") {
    document.getElementById(item).style.display = "initial";
  } else {
    document.getElementById(item).style.display = "none";
    document.getElementById(item).style.background = "white";
  }
}


function mouse(item) { 
  if (item.style.background != 'lightblue') { 
    item.style.background = 'lightblue'; 
    item.style.fontSize = '200%';
  } else { 
    item.style.fontSize = '100%';
    item.style.background = 'white'
  }
}


function highlightMobile() { 
  //this is how to use js to change css for classes
  var mobile = document.getElementsByClassName('mobile');
  for (var i = 0; i < mobile.length; i++) { 
    if (mobile[i].style.background != "yellow") { 
      mobile[i].style.background = "yellow";
    } else { 
      mobile[i].style.background = "white";
    }
  }
}


function animation1() { 
  document.getElementById('myAnimation').style.animation = "down 6s 1";
}

function animationStart() {
  document.getElementById('myAnimation').style.backgroundColor = "lightorange";
}

function animationEnd() {
  document.getElementById('myAnimation').style.backgroundColor = "lightgray";
}



