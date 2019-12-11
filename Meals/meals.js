
function populate() {
  var week = ["sunday" ,"monday" ,"tuesday" ,"wednesday" ,"thursday" ,"friday" ,"saturday"];
  var day = new Date(); 

  document.getElementById('breakfast').innerHTML = "oatmeal"
  document.getElementById('lunch').innerHTML = "ramen"
  // document.getElementById('populate').style.animation = '';
  document.getElementById('populate').style.display = 'none';

  changeLayout();

  // create five dinners
  for (var i = 0 ; i < 5; i++) { 
    displayDinner(i);
  }
  
  // display today's meals
  // goTo(week[day.getDay()]);

}

function addAnimate() { 
  document.getElementById('populate').style.animation = 'press 2s infinite linear alternate';
}


function changeLayout() { 
  var din = document.getElementsByClassName('dinner');
  for (var i = 0; i < din.length; i++) { 
    din[i].style.heightMax = "800px";
  }
  for (var i = 0; i < document.getElementsByTagName('h1').length; i++) { 
    document.getElementsByTagName('h1')[i].style.marginBottom = "2px";
    document.getElementsByTagName('h1')[i].style.marginTop = "30px";
  }
  for (var i = 0; i < document.getElementsByTagName('h2').length; i++) { 
    document.getElementsByTagName('h2')[i].style.margin = "6px";
  }
  for (var i = 0; i < document.getElementsByTagName('h3').length; i++) { 
    document.getElementsByTagName('h3')[i].style.margin = "3px";
  }
  for (var i = 0; i < document.getElementsByTagName('p').length; i++) { 
    document.getElementsByTagName('p')[i].style.margin = "5px";
  }
  document.getElementById('main').style.paddingTop = '0px';
  document.getElementById('main').style.position = 'absolute';  
}