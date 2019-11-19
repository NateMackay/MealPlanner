
var emptyMeal = { 
  id: "123", 
  cookDirections: "",
  youtubeLink: "",

  ingredPortions: "",
  ingredient: "",

  getIngredients: function() { 
    var myDiv = document.createElement('ul');

    for (i = 0; i < this.ingredient.length; i++) { 
      var item = createElement('li');
      item.textContent = this.ingredPortions + " " + this.ingredient;
      myDiv.appendChild(item);
    }
    section.appendChild(myDiv);
  }
 
}

//this function creates an object, displays it (calls the display function), and stores it in localStorage 
function store() {
  var id = hiddenId.value;
  //the api url
  var requestURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id;
  //create an object
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) { 
      var dinner = xhttp.response;
      storeAMeal(dinner);
    }
  }
  xhttp.open('GET', requestURL);
  xhttp.responseType = 'json';
  xhttp.send();
};


//stores the API information into a javaScript object, displays the object, and stores it in localStorage 
function storeAMeal(dinner) { 

  //create a meal object
  var meal = { 
    id: dinner.meals[0].idMeal, 
    name: dinner.meals[0].strMeal,
    cookDirections: dinner.meals[0].strIntructions,
    youtubeLink: dinner.meals[0].strYoutube,
    picture: dinner.meals[0].strMealThumb,

    ingredPortions: [
      dinner.meals[0].strMeasure1,
      dinner.meals[0].strMeasure2,
      dinner.meals[0].strMeasure3,
      dinner.meals[0].strMeasure4,
      dinner.meals[0].strMeasure5,
      dinner.meals[0].strMeasure6,
      dinner.meals[0].strMeasure7,
      dinner.meals[0].strMeasure8,
      dinner.meals[0].strMeasure9,
      dinner.meals[0].strMeasure10,
      dinner.meals[0].strMeasure11,
      dinner.meals[0].strMeasure12,
      dinner.meals[0].strMeasure13,
      dinner.meals[0].strMeasure14,
      dinner.meals[0].strMeasure15,
      dinner.meals[0].strMeasure16,
      dinner.meals[0].strMeasure17,
      dinner.meals[0].strMeasure18,
      dinner.meals[0].strMeasure19,
      dinner.meals[0].strMeasure20      
    ],
    ingredient: [
      dinner.meals[0].strIngredient1,
      dinner.meals[0].strIngredient2,
      dinner.meals[0].strIngredient3,
      dinner.meals[0].strIngredient4,
      dinner.meals[0].strIngredient5,
      dinner.meals[0].strIngredient6,
      dinner.meals[0].strIngredient7,
      dinner.meals[0].strIngredient8,
      dinner.meals[0].strIngredient9,
      dinner.meals[0].strIngredient10,
      dinner.meals[0].strIngredient11,
      dinner.meals[0].strIngredient12,
      dinner.meals[0].strIngredient13,
      dinner.meals[0].strIngredient14,
      dinner.meals[0].strIngredient15,
      dinner.meals[0].strIngredient16,
      dinner.meals[0].strIngredient17,
      dinner.meals[0].strIngredient18,
      dinner.meals[0].strIngredient19,
      dinner.meals[0].strIngredient20
    ],

    //object method
    getIngredients: function() { 
      var myDiv = document.createElement('ul');
  
      for (i = 0; i < this.ingredient.length; i++) { 
        if (this.ingredient[i].length > 1) { 
          var item = document.createElement('li');
          item.textContent = this.ingredPortions[i] + " " + this.ingredient[i];
          myDiv.appendChild(item);
        }
      }
      list.appendChild(myDiv);
    }
   
  }
  console.log(meal);
  localStorage.setItem('meal', JSON.stringify(meal));
  document.getElementById('objectmessage').innerHTML = "Your object was created.";
  displayObject(meal, object);
};


//displays a meal object 
function displayObject(meal, divName) { 
  var fromLS = false;
  //get the data from localStorage (if needed)
  if (meal == "one") {
    var temp = localStorage.getItem("meal"); 
    meal = JSON.parse(temp);
    fromLS = true;
  }

  var ul = document.createElement('ul');
  ul.setAttribute("id", "list")

  //add the meal name to the list
  var item = document.createElement('li');
  item.textContent = "Meal name: " + meal.name;
  ul.appendChild(item);

  //add the Youtube link to the list
  var item = document.createElement('li');
  item.textContent = "Youtube link : " + meal.youtubeLink;
  ul.appendChild(item);

  //add the picture to the list
  var item = document.createElement('li');
  item.textContent = "Meal picture: ";
  ul.appendChild(item);
  var pic = document.createElement('img');
  pic.setAttribute("src", meal.picture);
  pic.setAttribute("width", "200px");
  ul.appendChild(pic);
  divName.appendChild(ul);

  //add the ingredients to the list
  var item = document.createElement('li');
  item.textContent = "Ingredients: ";
  ul.appendChild(item);

  //localStorage doesn't keep object methods. 
  if (fromLS) {
    var myDiv = document.createElement('ul');
  
    for (i = 0; i < meal.ingredient.length; i++) { 
      if (meal.ingredPortions[i]) { 
        var item = document.createElement('li');
        item.textContent = meal.ingredPortions[i] + " " + meal.ingredient[i];
        myDiv.appendChild(item);
      }
    }
    ul.appendChild(myDiv); }
  else {     
    //run the object method
    meal.getIngredients();
  }
  divName.appendChild(ul);

}