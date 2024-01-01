var lunches = [
  ["ramen", "https://cdn-icons-png.flaticon.com/128/1623/1623786.png", ["ramen"]],
  ["corndog", "https://cdn-icons-png.flaticon.com/128/1680/1680840.png", ["corndogs"]],
  ["pb & j", "https://cdn-icons-png.flaticon.com/128/12908/12908739.png", ["bread"]],
  ["quesadillas", "https://cdn-icons-png.flaticon.com/128/6313/6313362.png", ["tortillas"]],
  ["applesauce", "", ["applesauce"]],
  ["sandwich", "https://cdn-icons-png.flaticon.com/128/2821/2821805.png", ["bread"]],
  ["mac & cheese", "https://cdn-icons-png.flaticon.com/128/8616/8616736.png", ["mac & cheese"]],
  ["bagel", "https://cdn-icons-png.flaticon.com/128/992/992708.png", ["bagels"]],
  ["chips & cheese", "https://cdn-icons-png.flaticon.com/128/7507/7507644.png", ["tortillas chips"]],
  ["frozen burrito", "https://cdn-icons-png.flaticon.com/128/1647/1647055.png", ["frozen burritos"]],
  ["hot dog", "https://cdn-icons-png.flaticon.com/128/2102/2102354.png", ["hot dogs"]],
  ["toast & yogurt", "https://cdn-icons-png.flaticon.com/128/2592/2592587.png", ["bread"]],
]

// lunch meals
// 0 ramen
// 1 corndog
// 2 pb & j
// 3 quesadillas
// 4 applesauce
// 5 sandwich
// 6 mac & cheese
// 7 bagel
// 8 chips & cheese
// 9 frozen burritos
// 10 hot dogs
// 11 toast & yogurt

// change lunch meals here
var lunchWeek = [
  5,
  0,
  2,
  5,
  11,
  9,
  7,
]

var lMeals = [
  lunches[lunchWeek[0]][0],
  lunches[lunchWeek[1]][0],
  lunches[lunchWeek[2]][0],
  lunches[lunchWeek[3]][0],
  lunches[lunchWeek[4]][0],
  lunches[lunchWeek[5]][0],
  lunches[lunchWeek[6]][0],
];

var lunchMWF = [
  lunches[lunchWeek[0]][0],
  lunches[lunchWeek[1]][0],
  lunches[lunchWeek[2]][0],
  lunches[lunchWeek[3]][0],
  lunches[lunchWeek[4]][0],
  lunches[lunchWeek[5]][0],
  lunches[lunchWeek[6]][0],
];

var lunchO = [
  lunches[lunchWeek[0]][0],
  lunches[lunchWeek[1]][0],
  lunches[lunchWeek[2]][0],
  lunches[lunchWeek[3]][0],
  lunches[lunchWeek[4]][0],
  lunches[lunchWeek[5]][0],
  lunches[lunchWeek[6]][0],
];

var lIcon = [
  lunches[lunchWeek[0]][1],
  lunches[lunchWeek[1]][1],
  lunches[lunchWeek[2]][1],
  lunches[lunchWeek[3]][1],
  lunches[lunchWeek[4]][1],
  lunches[lunchWeek[5]][1],
  lunches[lunchWeek[6]][1],
];

var lIconMWF = [
  lunches[lunchWeek[0]][0],
  lunches[lunchWeek[1]][0],
  lunches[lunchWeek[2]][0],
  lunches[lunchWeek[3]][0],
  lunches[lunchWeek[4]][0],
  lunches[lunchWeek[5]][0],
  lunches[lunchWeek[6]][0],
];

var lIngredients = [
  lunches[lunchWeek[0]][2],
  lunches[lunchWeek[1]][2],
  lunches[lunchWeek[2]][2],
  lunches[lunchWeek[3]][2],
  lunches[lunchWeek[4]][2],
  lunches[lunchWeek[5]][2],
  lunches[lunchWeek[6]][2],
];

function addLunches() { 
  var lunch = document.getElementsByClassName('lunchMeal'); 
  var back  = document.getElementsByClassName('otherLunch');
  var sunday = parseInt(localStorage.sunday);

  for (var i = 0; i < 7; i++) {
    if ((i % 1) == 1) {
      var icon = document.createElement('img');
      icon.setAttribute('src', lIconMWF[(i) % lIconMWF.length]);
      icon.setAttribute("height", "30px");
      lunch[i].replaceChild(icon, lunch[i].childNodes[0]);
  
      var text = document.createElement('span');
      text.innerHTML = lunchMWF[(i) % lunchMWF.length]; 
      lunch[i].replaceChild(text, lunch[i].childNodes[1]);
      lunch[i].style.display = "inline-flex";

      //add the ingredients
      var j = 0;
      while (lIngredientsMWF[(i) % lunchMWF.length][j]) { 
        if (inList(lIngredientsMWF[(i) % lunchMWF.length][j])) {
          // don't add it to the list if it already exists
          j++;
        } else {
          sessionStorage.setItem(sessionStorage.iCounter, lIngredientsMWF[(i) % lunchMWF.length][j]);
          sessionStorage.setItem("iCounter", parseInt(sessionStorage.getItem("iCounter")) + 1);
          j++;
        }
      }
      
    } else {
      var icon = document.createElement('img');
      icon.setAttribute('src', lIcon[(i) % lIcon.length]);
      icon.setAttribute("height", "30px");
      lunch[i].replaceChild(icon, lunch[i].childNodes[0]);

      var text = document.createElement('span');
      text.innerHTML = lunchO[(i) % lunchO.length]; 
      lunch[i].replaceChild(text, lunch[i].childNodes[1]);
      lunch[i].style.display = "inline-flex";

      //add the ingredients
      var j = 0;
      while (lIngredients[(i) % lIcon.length][j]) { 
        if (inList(lIngredients[(i) % lIcon.length][j])) {
          // don't add it to the list if it already exists
          j++;
        } else {
          sessionStorage.setItem(sessionStorage.iCounter, lIngredients[(i) % lIcon.length][j]);
          sessionStorage.setItem("iCounter", parseInt(sessionStorage.getItem("iCounter")) + 1);
          j++;
        }
      }
    }

    //add an alternate meal to the back of the card 
    var title = document.createElement('h4');
    title.innerHTML = "or";
    back[i].replaceChild(title, back[i].childNodes[0]);

    var l = document.createElement('p');
    l.innerHTML = lMeals[(i) % lMeals.length];
    back[i].replaceChild(l, back[i].childNodes[1]);
  }
}
