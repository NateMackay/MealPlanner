
var week = ["sunday" ,"monday" ,"tuesday" ,"wednesday" ,"thursday" ,"friday" ,"saturday"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// breakfast meals not used 
//var bMeals = ["cereal", "eggs", "coffee cake", "waffles" ];

// var bMeals = ["Fun", "Oatmeal", "Omlets & toast", "Oatmeal", "Pancakes", "German pancakes", "breakfast burritos"
// ];

// // breakfast ingredients
// var bIngredients = [
//   [""],
//   ["oats", "peanut butter", "chocolate chips"],
//   ["eggs", "peppers", "cheese"], 
//   ["oats", "peanut butter", "chocolate chips"],
//   ["flour", "sugar", "baking powder", "salt", "eggs", "oil", "milk"],
//   ["eggs", "flour", "sugar"],
//   ["tortillas", "eggs", "cubed ham", "cheese"]  
// ];

// // breakfast icons
// var bIcons = [
//   "",
//   "https://image.flaticon.com/icons/svg/142/142915.svg", 
//   "https://image.flaticon.com/icons/svg/1543/1543334.svg",
//   "https://image.flaticon.com/icons/svg/142/142915.svg", 
//   "https://image.flaticon.com/icons/svg/2484/2484202.svg",
//   "https://image.flaticon.com/icons/svg/1182/1182290.svg",
//   "https://image.flaticon.com/icons/svg/142/142882.svg", 
// ];

// var Icons = [
//   "https://image.flaticon.com/icons/svg/135/135516.svg", 
//   "https://image.flaticon.com/icons/svg/352/352702.svg", 
//   "https://image.flaticon.com/icons/svg/1662/1662345.svg", 
//   "https://image.flaticon.com/icons/svg/1669/1669046.svg",
//   ];


var commonIngredients = [
  "flour", "sugar", "baking powder", "salt", "oil", "ramen", "black pepper", "beef broth", "worcestershire sauce", "parsley", "oregano", "water", "chicken broth", "thyme", "baking soda", "tomato sauce", "garlic powder", "basil", "Italian seasoning", "chili powder", "olive oil", "brown sugar", "dry mustard", "baked beans", "milk", "salad dressing", "black beans", "curry", "mayonnaise", "lemon juice", "evaporated milk", "marjoram", "vegetable broth", "nutmeg", "italian seasoning", "tomato paste", "salsa"
];

 function populate(days) {
  var day = new Date(); 

  // if (sessionStorage.length < 1) {
  //  changeLayout();
  // }
  
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
    // display today's meals
    goTo(week[day.getDay()]);
  } else {
    goTo(week[0]);
  }

  // if (sessionStorage.getItem('open') != 'true') {
  //   sessionStorage.setItem('open', true);
  //   document.getElementById('mySidenav').style.width = "0px";
  // }
}

// function addBreakfasts() { 
//   var breakfast = document.getElementsByClassName('breakfastMeal'); 
//   var sunday = parseInt(localStorage.sunday);

//   for (var i = 0; i < 7; i++) {
//     // console.log('breakfast' + i);
//     var icon = document.createElement('img');
//     icon.setAttribute('src', bIcons[(i + 0) % bIcons.length]);
//     breakfast[i].innerHTML = bMeals[(i + 0) % bMeals.length]; 
//     icon.setAttribute("height", "25px");
//     icon.setAttribute("style", "margin: 0px 10px");
//     breakfast[i].appendChild(icon);
//     breakfast[i].style.display = "inline-flex";

//     var j = 0;
//     while (bIngredients[i][j]) { 
//      // console.log(sessionStorage.iCounter);
//       if (inList(bIngredients[i][j])) {
//         // don't add it to the list if it already exists
//         j++;
//       } else {
//         sessionStorage.setItem(sessionStorage.iCounter, bIngredients[i][j]);
//         sessionStorage.setItem("iCounter", parseInt(sessionStorage.getItem("iCounter")) + 1);
//         j++;
//       }
//     }
//   }
// }


// this function checks the list of ingredients and common ingredients and returns true if the ingredient is in the list and false if it is not.
function inList(item) { 
  for (k = 0; k < parseInt(sessionStorage.getItem('iCounter')); k++) { 
    if (sessionStorage.getItem(k) == item) { 
      return true;
    }
  }

  for (k = 0; k < commonIngredients.length; k++) { 
    if (item == commonIngredients[k]) { 
      return true;
    }
  }
  
  return false;
};

// this modifies the design of the page
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
  
  //if (document.getElementById('mySidenav').style.width == "") {
    document.getElementById('mySidenav').style.width = '0px';
  //}
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
function toggleIngredients(displayMenu, week) { 

  if (displayMenu) {
    document.getElementById('swiper').style.display = "flex";
    document.getElementById('listOfIngredients').style.visibility = "hidden";
    //eraseIngredients();
  } else {
    document.getElementById('listOfIngredients').style.visibility = "visible";
    document.getElementById('swiper').style.display = "none";
    displayIngredients(week);
  }
}

// this function displays the list of ingredients by creating li elements
function displayIngredients(week) { 
  eraseIngredients();
  // add a list header
  var header = document.createElement('li');
  var bold   = document.createElement('h4');
  bold.innerHTML = week + " week's grocery list";
  header.appendChild(bold);
  listOfIngredients.appendChild(header);
  
  // add the list of ingredients
  var i = 0;
  while (sessionStorage.getItem(i)) {
    var li = document.createElement('li');
    li.innerHTML = sessionStorage.getItem(i);
    li.setAttribute('onclick', 'lineThrough(this)');
    listOfIngredients.appendChild(li);
    sessionStorage.removeItem(i);
    i++;
  }

  // add a button
  var li = document.createElement('li');
  var button = document.createElement('button');
  button.innerHTML = "Reorder list";
  button.setAttribute('onclick', 'reorderList()');
  li.appendChild(button);
  listOfIngredients.appendChild(li);
};

// this function erases the list of ingredients
function eraseIngredients() { 
  while (listOfIngredients.childElementCount > 0) {
    listOfIngredients.removeChild(listOfIngredients.childNodes[0]);
  }
};

// this function creates and eliminates a strike-through line through a word
function lineThrough(phrase) { 
  if (phrase.childElementCount > 0) { 
    var replace = document.createElement('li');
    replace.setAttribute('onclick', 'lineThrough(this)');
    replace.innerHTML = phrase.innerText;
    phrase.parentElement.replaceChild(replace, phrase);
  } else {
    var replace = document.createElement('li');
    replace.setAttribute('onclick', 'lineThrough(this)');
    replace.innerHTML = phrase.innerHTML.strike();
    phrase.parentElement.replaceChild(replace, phrase);
  }
};

// this function reorders the list of ingredients and places the ingredients with line through it at the bottom of the list
function reorderList() {

  var length = listOfIngredients.childElementCount - 1;
  for (var i = 1; i < length; i++) { 
    if (listOfIngredients.childNodes[i].innerText == "Reorder list") {
      break;
    } else if (listOfIngredients.childNodes[i].childElementCount > 0) { 
      var li = document.createElement('li');
      var st = document.createElement('strike');
      st.innerHTML = listOfIngredients.childNodes[i].innerText;
      st.appendChild(li);
      listOfIngredients.appendChild(st);
      listOfIngredients.removeChild(listOfIngredients.childNodes[i]);
      i--;
      length--;
    }
  }

};
