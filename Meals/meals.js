
var week = ["sunday" ,"monday" ,"tuesday" ,"wednesday" ,"thursday" ,"friday" ,"saturday"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// breakfast meals
//var bMeals = ["oatmeal", "cereal", "pancakes", "oatmeal", "breakfast burritos", "cereal", "eggs", "oatmeal", "coffee cake", "waffles",  "cereal","german pancakes", "oatmeal", "french toast"];

var bMeals = ["Fun", "Oatmeal", "Omlets & toast", "Oatmeal", "Pancakes", "German pancakes", "breakfast burritos"
];

// breakfast ingredients
var bIngredients = [
  [""],
  ["oats", "peanut butter", "chocolate chips"],
  ["eggs", "peppers", "cheese"], 
  ["oats", "peanut butter", "chocolate chips"],
  ["flour", "sugar", "baking powder", "salt", "eggs", "oil", "milk"],
  ["eggs", "flour", "sugar"],
  ["tortillas", "eggs", "ham", "cheese"]  
];

// breakfast icons
var bIcons = [
  "",
  "https://image.flaticon.com/icons/svg/142/142915.svg", 
  "https://image.flaticon.com/icons/svg/1543/1543334.svg",
  "https://image.flaticon.com/icons/svg/142/142915.svg", 
  "https://image.flaticon.com/icons/svg/2484/2484202.svg",
  "https://image.flaticon.com/icons/svg/1182/1182290.svg",
  "https://image.flaticon.com/icons/svg/142/142882.svg", 
];

var Icons = [
  "https://image.flaticon.com/icons/svg/142/142915.svg", 
  "https://image.flaticon.com/icons/svg/135/135516.svg", 
  "https://image.flaticon.com/icons/svg/2484/2484202.svg",
  "https://image.flaticon.com/icons/svg/142/142915.svg", 
  "https://image.flaticon.com/icons/svg/142/142882.svg", 
  
  "https://image.flaticon.com/icons/svg/135/135516.svg", 
  "https://image.flaticon.com/icons/svg/352/352702.svg", 
  "https://image.flaticon.com/icons/svg/142/142915.svg", 
  "https://image.flaticon.com/icons/svg/1662/1662345.svg", 
  "https://image.flaticon.com/icons/svg/1669/1669046.svg",
  
  "https://image.flaticon.com/icons/svg/135/135516.svg", 
  "https://image.flaticon.com/icons/svg/2484/2484202.svg",
  "https://image.flaticon.com/icons/svg/142/142915.svg", 
  "https://image.flaticon.com/icons/svg/1139/1139689.svg" 
  ];

// lunch meals 
var lMeals = ["ramen", "bagels", "sandwiches", "quesidillas", "bagels", "toast & applesauce", "sandwiches", "ramen", "bagels", "sandwiches", "quesidillas"];

// lunch icons 
var lIcons = ["https://image.flaticon.com/icons/png/512/1046/1046748.png", "https://image.flaticon.com/icons/png/512/1231/premium/1231662.png", "https://image.flaticon.com/icons/png/512/1095/1095289.png", 
"https://image.flaticon.com/icons/png/512/872/872434.png", 
"https://image.flaticon.com/icons/png/512/1231/premium/1231662.png", "https://image.flaticon.com/icons/png/512/189/189122.png", 
"https://image.flaticon.com/icons/png/512/1095/1095289.png", 
"https://image.flaticon.com/icons/png/512/1046/1046748.png", 
"https://image.flaticon.com/icons/png/512/1231/premium/1231662.png", "https://image.flaticon.com/icons/png/512/1095/1095289.png", 
"https://image.flaticon.com/icons/png/512/872/872434.png"
];

function populate(days) {
  var day = new Date(); 

  addDates(days);

  // add seven breakfasts 
  addBreakfasts();

  // add seven lunches
  addLunches();

  // create seven dinners
  for (var i = 0; i < 7; i++) { 
    displayDinner(i);
  }

  if (days < 1) {
    changeLayout();
    // display today's meals
    goTo(week[day.getDay()]);
  } else {
    goTo(week[0]);
  }
}

function addAnimate() { 
  document.getElementById('populate').style.animation = 'press 2s infinite linear alternate';
}

function addBreakfasts() { 
  var breakfast = document.getElementsByClassName('breakfastMeal'); 
  var sunday = parseInt(localStorage.sunday);

  for (var i = 0; i < 7; i++) {
    // console.log('breakfast' + i);
    var icon = document.createElement('img');
    icon.setAttribute('src', bIcons[(i + 0) % bIcons.length]);
    breakfast[i].innerHTML = bMeals[(i + 0) % bMeals.length]; 
    icon.setAttribute("height", "25px");
    icon.setAttribute("style", "margin: 0px 10px");
    breakfast[i].appendChild(icon);
    breakfast[i].style.display = "inline-flex";

    var j = 0;
    while (bIngredients[i][j]) { 
     // console.log(sessionStorage.iCounter);
      sessionStorage.setItem(sessionStorage.iCounter, bIngredients[i][j]);
    //  console.log(sessionStorage.getItem(sessionStorage.iCounter));
      sessionStorage.setItem("iCounter", parseInt(sessionStorage.getItem("iCounter")) + 1);
      j++;
    }

  }
}


function addLunches() { 
  var lunch = document.getElementsByClassName('lunchMeal'); 
  var sunday = parseInt(localStorage.sunday);

  for (var i = 0; i < 7; i++) {
    // console.log('lunch' + i);
    var icon = document.createElement('img');
    icon.setAttribute('src', lIcons[(i + sunday) % lIcons.length]);
    icon.setAttribute("height", "30px");
    icon.setAttribute("style", "margin: 0px 10px");
    lunch[i].replaceChild(icon, lunch[i].childNodes[0]);

    var text = document.createElement('span');
    text.innerHTML = lMeals[(i + sunday) % lMeals.length]; 
    lunch[i].replaceChild(text, lunch[i].childNodes[1]);
    lunch[i].style.display = "inline-flex";
  }
}


function changeLayout() { 
  // document.getElementById('swiper').style.display = "inherit";

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
  document.getElementById('hamburgerIcon').style.paddingTop = '0px';
  document.getElementById('hamburgerIcon').style.position = 'absolute'; 

  document.getElementById('populate').style.display = 'none';
}

//this function adds the date to each day
function addDates(next) { 
  var days = document.getElementsByClassName('date'); 
  var today  = new Date();

  var sunday = new Date;
  sunday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + next);

  //store a local date value for sunday 
  localStorage.setItem('sunday', sunday.getDate());
  sessionStorage.setItem('iCounter', parseInt(0));

  var dayToSet = new Date;
  dayToSet = sunday;

  for (var i = 0 + next; i < 7 + next; i++) {
    days[(i + next) % 7].innerHTML = capitalize(week[(i + next) % 7]) + ", " + month[dayToSet.getMonth()] + " " + dayToSet.getDate();
    dayToSet.setDate(dayToSet.getDate() + 1);
  }
}

//this function capitalizes the first letter of a string
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

//display the list of ingredients
function toggleIngredients(displayMenu) { 

  if (displayMenu) {
    document.getElementById('swiper').style.display = "flex";
    //eraseIngredients();
  } else {
    document.getElementById('swiper').style.display = "none";
    displayIngredients();
  }
}

function displayIngredients() { 
  eraseIngredients();
  var i = 0;
  while (sessionStorage.getItem(i)) {
    var li = document.createElement('li');
    li.innerHTML = sessionStorage.getItem(i);
    li.setAttribute('onclick', 'lineThrough(this)');
    listOfIngredients.appendChild(li);
    sessionStorage.removeItem(i);
    i++;
  }

};

function eraseIngredients() { 
  while (listOfIngredients.childElementCount > 0) {
    listOfIngredients.removeChild(listOfIngredients.childNodes[0]);
  }
};

function lineThrough(phrase) { 
  var replace = document.createElement('li');
  replace.innerHTML = phrase.innerHTML.strike();
  phrase.parentElement.replaceChild(replace, phrase);
};
