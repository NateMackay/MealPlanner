
var bMeals = ["fun", "oatmeal", "omlets & toast", "oatmeal", "pancakes", "german pancakes", "breakfast burritos"
];

// breakfast meals not used 
//var bMeals = ["cereal", "eggs", "coffee cake", "waffles" ];

// breakfast ingredients
var bIngredients = [
  [""],
  ["oats", "peanut butter", "chocolate chips"],
  ["eggs", "peppers", "cheese"], 
  ["oats", "peanut butter", "chocolate chips"],
  ["flour", "sugar", "baking powder", "salt", "eggs", "oil", "milk"],
  ["eggs", "flour", "sugar"],
  ["tortillas", "eggs", "cubed ham", "cheese"]  
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

// unused icons
// var Icons = [
//   "https://image.flaticon.com/icons/svg/135/135516.svg", 
//   "https://image.flaticon.com/icons/svg/352/352702.svg", 
//   "https://image.flaticon.com/icons/svg/1662/1662345.svg", 
//   "https://image.flaticon.com/icons/svg/1669/1669046.svg",
//   ];

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
      if (inList(bIngredients[i][j])) {
        // don't add it to the list if it already exists
        j++;
      } else {
        sessionStorage.setItem(sessionStorage.iCounter, bIngredients[i][j]);
        sessionStorage.setItem("iCounter", parseInt(sessionStorage.getItem("iCounter")) + 1);
        j++;
      }
    }
  }
}

