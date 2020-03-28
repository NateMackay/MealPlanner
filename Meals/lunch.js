
// unused lunch meals 
//var lMeals = ["ramen", "bagels", "sandwiches", "quesidillas", "bagels", "toast & applesauce", "sandwiches", "ramen", "bagels", "sandwiches", "quesidillas"];

var lunchMWF = ["bagel", "corndog", "ramen"];
var lunchO   = ["quesadillas", "cold cereal", "peanut butter & jelly sandwiches", "applesauce & toast", "ham & cheese sandwiches"];

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
  var sunday = parseInt(localStorage.sunday);

  for (var i = 0; i < 7; i++) {
    if ((i % 2) == 1) {
      var icon = document.createElement('img');
      icon.setAttribute('src', lIconMWF[(i + sunday) % lIconMWF.length]);
      icon.setAttribute("height", "30px");
      icon.setAttribute("style", "margin: 0px 10px");
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
      icon.setAttribute("style", "margin: 0px 10px");
      lunch[i].replaceChild(icon, lunch[i].childNodes[0]);

      var text = document.createElement('span');
      text.innerHTML = lunchO[(i + sunday) % lunchO.length]; 
      lunch[i].replaceChild(text, lunch[i].childNodes[1]);
      lunch[i].style.display = "inline-flex";

      //add the ingredients
      var j = 0;
      while (lIngredients[(i + sunday) % lIcon.length][j]) { 
       // console.log(sessionStorage.iCounter);
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

  }
}
