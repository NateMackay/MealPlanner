

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

  var listItems = document.getElementById(list).getElementsByTagName('li'); 
  for (var i = 0; i < listItems.length; i++) { 
    listItems[i].style.background = "white";
    listItems[i].style.fontWeight = "inital";  // doesn't work
    listItems[i].style.fontSize = "inital";   //doesn't work
  }

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

function addToList() { 
  var item = document.createElement("LI");
  var textnode = document.createTextNode("Create Form");
  item.appendChild(textnode);
  // var att = document.createElement("P");
  // att.innerText = '<div onclick="createForm()"></div>';
  // item.appendChild(att);
  document.getElementById("form").appendChild(item);

}

document.getElementById("form").addEventListener("click", createForm);

function createForm() { 
  // var text = "";
  // var form = document.createElement("FORM");
  // form.innerText = "Here is your form.";
  // document.getElementById("form").appendChild(form);
  var input = document.createElement("button");
  input.innerText = "Here is your input.";
  document.getElementById("form").appendChild(input);
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

function key(item) { 
  if (document.getElementById(item).style.background != "green") { 
    document.getElementById(item).style.background = "green";
    document.getElementById(item).style.fontWeight = "bolder";
  } else { 
    document.getElementById(item).style. background = "white";
    document.getElementById(item).style.fontWeight = "initial";
  }
}

