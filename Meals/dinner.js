




function displayDinner(index) {
  var today = new Date(); 
  var id = today.getMonth() * today.getDate();
  //  + 52700;
  // var din = document.getElementsByClassName('dinner');
  id = 52777;

    //the api url
    // var requestURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id + index;
    var requestURL = 'https://www.themealdb.com/api/json/v1/1/random.php?';
    //create an object
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) { 
        var dinner = xhttp.response;
        storeAMeal(dinner, index);
      }
    }
    
    xhttp.open('GET', requestURL);
    xhttp.responseType = 'json';
    xhttp.send();
  // }
};


//stores the API information into a javaScript object, displays the object, and stores it in localStorage 
function storeAMeal(dinner, index) { 

  //create a meal object
  var meal = { 
    id: dinner.meals[0].idMeal, 
    name: dinner.meals[0].strMeal,
    cookDirections: dinner.meals[0].strInstructions,
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
  addAMeal(meal, index);
};

//add a meal to the DOM
function addAMeal(dinner, index) {
  //create an object
  // var dinner = myObj;
  var din = document.getElementsByClassName('dinner');
  
    //create a div
    var myDiv = document.createElement('div');
    //create a header, background image, a link, and some text 
    var myH2 = document.createElement('h2');
    din[index].style.backgroundImage = "url("+dinner.picture+")";
    din[index].style.backgroundSize = "cover";

    // myDiv.style.overflowY = "scroll";
    // myDiv.style.height = "440px";

    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('a');
    var myPara3 = document.createElement('p');

    myH2.textContent = dinner.name;
    myPara1.textContent = 'id: ' + dinner.id;
    myPara2.textContent = 'Youtube';
    myPara2.setAttribute('href', dinner.youtubeLink);
    myPara2.setAttribute('target', '_blank');
    myPara3.textContent = 'Directions: ' + dinner.cookDirections;
    // myPara3.textContent = 'Directions: ' + dinner.strInstructions;

    //attach the newly created elements to the parent element
    myDiv.appendChild(myH2);
    //myDiv.appendChild(myPara1);
    myDiv.appendChild(myPara3);
    myDiv.appendChild(myPara2);
    din[index].appendChild(myDiv);

}

