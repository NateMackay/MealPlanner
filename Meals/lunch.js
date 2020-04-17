
// lunch meals
var lunchMWF = ["bagel", "corndog", "ramen"];
var lunchO   = ["quesadillas", "cold cereal *", "pb & j sandwiches", "applesauce * & toast", "ham & cheese sandwiches"];

// alternate lunch meals (gluten-free)
var lMeals = ["chips & cheese *", "bagel *"]
//var lMeals = ["mac & cheese", "burritos", "hot dogs"];

// lunch icons 
var lIcons = ["https://image.flaticon.com/icons/png/512/1046/1046748.png", "https://image.flaticon.com/icons/png/512/1231/premium/1231662.png", "https://image.flaticon.com/icons/png/512/1095/1095289.png", 
"https://image.flaticon.com/icons/png/512/872/872434.png", 
"https://image.flaticon.com/icons/png/512/1231/premium/1231662.png", "https://image.flaticon.com/icons/png/512/189/189122.png", 
"https://image.flaticon.com/icons/png/512/1095/1095289.png", 
"https://image.flaticon.com/icons/png/512/1046/1046748.png", 
"https://image.flaticon.com/icons/png/512/1231/premium/1231662.png", "https://image.flaticon.com/icons/png/512/1095/1095289.png", 
"https://image.flaticon.com/icons/png/512/872/872434.png"
];

var lIconMWF = ["https://image.flaticon.com/icons/png/512/1231/premium/1231662.png", "https://image.flaticon.com/icons/svg/837/837610.svg", "https://image.flaticon.com/icons/png/512/1046/1046748.png"];
var lIcon     = ["https://image.flaticon.com/icons/png/512/872/872434.png", "https://image.flaticon.com/icons/svg/135/135516.svg", "https://image.flaticon.com/icons/svg/2285/2285997.svg", "https://image.flaticon.com/icons/png/512/189/189122.png", "https://image.flaticon.com/icons/png/512/1095/1095289.png"
];

// ingredients
var lIngredientsMWF = [
  ["bagels", "cream cheese"],
  ["corndogs"],
  ["ramen"] 
];

var lIngredients = [
  ["tortillas", "cheese"],
  ["cereal"],
  ["peanut butter", "jam", "bread"], 
  ["applesauce", "bread"],
  ["bread", "ham slices", "cheese"]  
];

function addLunches() { 
  var lunch = document.getElementsByClassName('lunchMeal'); 
  var back  = document.getElementsByClassName('otherLunch');
  var sunday = parseInt(localStorage.sunday);

  for (var i = 0; i < 7; i++) {
    if ((i % 2) == 1) {
      var icon = document.createElement('img');
      icon.setAttribute('src', lIconMWF[(i + sunday) % lIconMWF.length]);
      icon.setAttribute("height", "30px");
      lunch[i].replaceChild(icon, lunch[i].childNodes[0]);
  
      var text = document.createElement('span');
      text.innerHTML = lunchMWF[(i + sunday) % lunchMWF.length]; 
      lunch[i].replaceChild(text, lunch[i].childNodes[1]);
      lunch[i].style.display = "inline-flex";

      //add the ingredients
      var j = 0;
      while (lIngredientsMWF[(i + sunday) % lunchMWF.length][j]) { 
        if (inList(lIngredientsMWF[(i + sunday) % lunchMWF.length][j])) {
          // don't add it to the list if it already exists
          j++;
        } else {
          sessionStorage.setItem(sessionStorage.iCounter, lIngredientsMWF[(i + sunday) % lunchMWF.length][j]);
          sessionStorage.setItem("iCounter", parseInt(sessionStorage.getItem("iCounter")) + 1);
          j++;
        }
      }
      
    } else {
      var icon = document.createElement('img');
      icon.setAttribute('src', lIcon[(i + sunday) % lIcon.length]);
      icon.setAttribute("height", "30px");
      lunch[i].replaceChild(icon, lunch[i].childNodes[0]);

      var text = document.createElement('span');
      text.innerHTML = lunchO[(i + sunday) % lunchO.length]; 
      lunch[i].replaceChild(text, lunch[i].childNodes[1]);
      lunch[i].style.display = "inline-flex";

      //add the ingredients
      var j = 0;
      while (lIngredients[(i + sunday) % lIcon.length][j]) { 
        if (inList(lIngredients[(i + sunday) % lIcon.length][j])) {
          // don't add it to the list if it already exists
          j++;
        } else {
          sessionStorage.setItem(sessionStorage.iCounter, lIngredients[(i + sunday) % lIcon.length][j]);
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
    l.innerHTML = lMeals[(i + sunday) % lMeals.length];
    back[i].replaceChild(l, back[i].childNodes[1]);
  }
}
