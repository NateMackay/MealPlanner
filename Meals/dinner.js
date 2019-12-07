




function displayDinner() {
  var today = new Date(); 
  var id = today.getMonth() * today.getDate() + 3;

  //the api url
  var requestURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id;
  //create an object
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) { 
      var dinner = xhttp.response;
      addAMeal(dinner);
    }
  }
  xhttp.open('GET', requestURL);
  xhttp.responseType = 'json';
  xhttp.send();
};

//add a meal to the DOM
function addAMeal(myObj) {
  //create an object
  var dinner = myObj['meals'];
  var din = document.getElementsByClassName('dinner');
  //display a new div for each item in the list
  for(i = 0; i < dinner.length; i++) {
    //create a div
    var myDiv = document.createElement('div');
    //create a header, background image, a link, and some text 
    var myH2 = document.createElement('h2');
    monDinner.style.backgroundImage = "url("+dinner[i].strMealThumb+")";
    monDinner.style.backgroundSize = "cover";
    myDiv.style.overflowY = "scroll";
    myDiv.style.height = "440px";

    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('a');
    var myPara3 = document.createElement('p');

    myH2.textContent = dinner[i].strMeal;
    myPara1.textContent = 'id: ' + dinner[i].idMeal;
    myPara2.textContent = 'Youtube:';
    myPara2.setAttribute('href', dinner[i].strYoutube);
    myPara2.setAttribute('target', '_blank');
    myPara3.textContent = 'Directions: ' + dinner[i].strInstructions;

    //attach the newly created elements to the parent element
    myDiv.appendChild(myH2);
    //myDiv.appendChild(myPara1);
    myDiv.appendChild(myPara3);
    myDiv.appendChild(myPara2);
    monDinner.appendChild(myDiv);
  }
}

