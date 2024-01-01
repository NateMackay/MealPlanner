// [name, icon, ingredients]
var breakfast_meals = [
  ["oatmeal", "https://cdn-icons-png.flaticon.com/128/3141/3141698.png", ["oats", "peanut butter", "chocolate chips"]],
  ["cereal", "https://cdn-icons-png.flaticon.com/128/3617/3617645.png", ["cereal", "milk"]],
  ["eggs", "https://cdn-icons-png.flaticon.com/128/604/604808.png", ["eggs"]],
  ["pancakes", "https://cdn-icons-png.flaticon.com/128/8084/8084040.png", ["pancake mix"]],
  ["waffles","https://cdn-icons-png.flaticon.com/128/5100/5100397.png", ["pancake mix"]],
  ["french toast", "https://cdn-icons-png.flaticon.com/128/3595/3595601.png", ["bread", "eggs"]],
  ["toast", "https://cdn-icons-png.flaticon.com/128/3595/3595601.png", ["bread"]],
  ["coffee cake", "https://cdn-icons-png.flaticon.com/128/7143/7143158.png", ["flour"]],
  ["smoothie", "https://thumbs.dreamstime.com/z/smoothie-white-fruit-glass-33375800.jpg", ["fruit"]],
  ["biscuit sandwich", "https://thumbs.dreamstime.com/z/breakfast-sandwich-red-plate-19929893.jpg", ["biscuits", "ham", "cheese"]],
  ["bagel sandwich", "https://thumbs.dreamstime.com/z/fresh-bagel-sandwich-16304862.jpg", ["bagel"]],
  ["malt-o-meal", "https://thumbs.dreamstime.com/z/bowl-white-grits-hot-tasty-butter-90792234.jpg", ["malt-o-meal"]],
  ["muffins", "https://thumbs.dreamstime.com/z/blueberry-muffins-basket-32954037.jpg", []],
  ["omlet", "https://cdn-icons-png.flaticon.com/128/3226/3226559.png", ["eggs"]],
  ["german pancakes", "", ["eggs", "flour"]],
]

// meals
// 0 oatmeal
// 1 cereal
// 2 eggs
// 3 pancakes
// 4 waffles
// 5 french toast
// 6 toast
// 7 coffee cake
// 8 smoothie
// 9 bisquit sandwich
// 10 bagel sandwich
// 11 malt-o-meal
// 12 muffins
// 13 omlet
// 14 german pancakes

// change meals for the week here
var bWeek = [
  5,
  1,
  0,
  1,
  0,
  3,
  1,
]

var bMeals = [
  breakfast_meals[bWeek[0]][0],
  breakfast_meals[bWeek[1]][0],
  breakfast_meals[bWeek[2]][0],
  breakfast_meals[bWeek[3]][0],
  breakfast_meals[bWeek[4]][0],
  breakfast_meals[bWeek[5]][0],
  breakfast_meals[bWeek[6]][0]
];

// optional breakfast meals 
var bMeals2 = [
  breakfast_meals[1][0],
  breakfast_meals[2][0],
  breakfast_meals[0][0],
  breakfast_meals[1][0],
  breakfast_meals[0][0],
  breakfast_meals[2][0],
  breakfast_meals[0][0],
];

var bIcons = [
  breakfast_meals[bWeek[0]][1],
  breakfast_meals[bWeek[1]][1],
  breakfast_meals[bWeek[2]][1],
  breakfast_meals[bWeek[3]][1],
  breakfast_meals[bWeek[4]][1],
  breakfast_meals[bWeek[5]][1],
  breakfast_meals[bWeek[6]][1]
]
// breakfast bIngredients
var bIngredients = [
  breakfast_meals[bWeek[0]][2],
  breakfast_meals[bWeek[1]][2],
  breakfast_meals[bWeek[2]][2],
  breakfast_meals[bWeek[3]][2],
  breakfast_meals[bWeek[4]][2],
  breakfast_meals[bWeek[5]][2],
  breakfast_meals[bWeek[6]][2]
]

// option breakfast meal icons
var Icons = [
  breakfast_meals[1][1],
  breakfast_meals[2][1],
  breakfast_meals[0][1],
  breakfast_meals[1][1],
  breakfast_meals[0][1],
  breakfast_meals[2][1],
  breakfast_meals[0][1],
];

function addBreakfasts() { 
  var breakfast = document.getElementsByClassName('breakfastMeal'); 
  var back = document.getElementsByClassName('otherBreakfast');

  if (breakfast[0].childElementCount < 1) {
  for (var i = 0; i < 7; i++) {
    //add the breakfast elements 
    var icon = document.createElement('img');
    icon.setAttribute('src', bIcons[(i + 0) % bIcons.length]);
    var text = document.createElement('div');
    text.innerHTML = bMeals[(i + 0) % bMeals.length]; 
    icon.setAttribute("height", "25px");
    breakfast[i].appendChild(text);
    breakfast[i].appendChild(icon);
    breakfast[i].style.display = "inline-flex";

    //add ingredients to the grocery list
    var j = 0;
    while (bIngredients[i][j]) { 
      if (inList(bIngredients[i][j])) {
        // don't add it to the list if it already exists
        j++;
      } else {
        sessionStorage.setItem(sessionStorage.iCounter, bIngredients[i][j]);
        sessionStorage.setItem("iCounter", parseInt(sessionStorage.getItem("iCounter")) + 1);
        j++;
      }
    }

    //add the additional breakfast meals 
    var title = document.createElement('h3');
    title.innerHTML = "alternate meal";
    back[i].appendChild(title);

    var icon = document.createElement('img');
    icon.setAttribute('src', Icons[(i + 0) % Icons.length]);
    back[i].innerHTML = bMeals2[(i + 0) % bMeals2.length]; 
    icon.setAttribute("height", "25px");
    icon.setAttribute("style", "margin: 0px 10px");
    back[i].appendChild(icon);
    back[i].style.display = "inline-flex";
  }
  } else {
    sessionStorage.setItem('iCounter', 8);
  }
}
