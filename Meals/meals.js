
var week = ["sunday" ,"monday" ,"tuesday" ,"wednesday" ,"thursday" ,"friday" ,"saturday"];

// breakfast meals
var bMeals = ["oatmeal", "cereal", "pancakes", "oatmeal", "breakfast burritos", "cereal", "eggs", "oatmeal", "coffee cake", "waffles",  "cereal","german pancakes", "oatmeal", "french toast"];

// breakfast icons
var bIcons = ["https://image.flaticon.com/icons/svg/142/142915.svg", "https://image.flaticon.com/icons/svg/135/135516.svg", "https://www.flaticon.com/premium-icon/icons/svg/497/497976.svg", "https://image.flaticon.com/icons/svg/142/142915.svg", "https://image.flaticon.com/icons/svg/142/142882.svg", "https://image.flaticon.com/icons/svg/135/135516.svg", "https://image.flaticon.com/icons/svg/352/352702.svg", "https://image.flaticon.com/icons/svg/142/142915.svg", "https://image.flaticon.com/icons/svg/1662/1662345.svg", "https://www.flaticon.com/premium-icon/icons/svg/679/679121.svg", "https://image.flaticon.com/icons/svg/135/135516.svg", "https://www.flaticon.com/premium-icon/icons/svg/497/497976.svg", "https://image.flaticon.com/icons/svg/142/142915.svg", "https://image.flaticon.com/icons/svg/1139/1139689.svg" ];

// lunch meals 
var lMeals = ["ramen", "bagels", "sandwiches", "quesidillas", "bagels", "toast & applesauce", "sandwiches", "ramen", "bagels", "sandwiches", "quesidillas"];

// lunch icons 
var lIcons = ["https://image.flaticon.com/icons/png/512/1046/1046748.png", "https://image.flaticon.com/icons/png/512/1231/premium/1231662.png", "https://image.flaticon.com/icons/png/512/1095/1095289.png", 
"https://image.flaticon.com/icons/png/512/872/872434.png", 
"https://image.flaticon.com/icons/png/512/1231/premium/1231662.png", "https://image.flaticon.com/icons/png/512/189/189122.png", 
"https://image.flaticon.com/icons/png/512/1095/1095289.png", 
"https://image.flaticon.com/icons/png/512/1046/1046748.png", 
"https://image.flaticon.com/icons/png/512/1231/premium/1231662.png", "https://image.flaticon.com/icons/png/512/1095/1095289.png", 
"https://image.flaticon.com/icons/png/512/872/872434.png"];

function populate() {
  var day = new Date(); 

  // add seven breakfasts 
  addBreakfasts();

  // add seven lunches
  addLunches();

  // create seven dinners
  for (var i = 0 ; i < 7; i++) { 
    displayDinner(i);
  }

  changeLayout();

  // display today's meals
  goTo(week[day.getDay()]);

}

function addAnimate() { 
  document.getElementById('populate').style.animation = 'press 2s infinite linear alternate';
}

function addBreakfasts() { 
  var breakfast = document.getElementsByClassName('breakfastMeal'); 

  for (var i = 0; i < 7; i++) {
    var icon = document.createElement('img');
    icon.setAttribute('src', bIcons[i]);
    breakfast[i].innerHTML = bMeals[i]; 
    icon.setAttribute("height", "25px");
    icon.setAttribute("style", "margin: 0px 10px");
    breakfast[i].appendChild(icon);
    breakfast[i].style.display = "inline-flex";
  }
}


function addLunches() { 
  var lunch = document.getElementsByClassName('lunchMeal'); 

  for (var i = 0; i < 7; i++) {
    var icon = document.createElement('img');
    icon.setAttribute('src', lIcons[i]);
    icon.setAttribute("height", "30px");
    icon.setAttribute("style", "margin: 0px 10px");
    lunch[i].appendChild(icon);

    var text = document.createElement('span');
    text.innerHTML = lMeals[i]; 
    lunch[i].appendChild(text);
    lunch[i].style.display = "inline-flex";
  }
}


function changeLayout() { 

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

  document.getElementById('populate').style.display = 'none';
}


