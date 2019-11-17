
function display() {
  //the api url
  var requestURL = 'https://www.themealdb.com/api/json/v1/1/random.php';
  //create an object
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', requestURL);
  xhttp.responseType = 'json';
  xhttp.send();

  //run this function when the object loads
  xhttp.onload = function() {
    var dinner = xhttp.response;
    addAMeal(dinner);
  }
};

//add a meal to the DOM
function addAMeal(myObj) {
  //create an object
  var dinner = myObj['meals'];
  //display a new div for each item in the list
  for(i = 0; i < dinner.length; i++) {
    //create a div
    var myDiv = document.createElement('div');
    //create a header, background image, a link, and some text 
    var myH2 = document.createElement('h2');
    myDiv.style.backgroundImage = "url("+dinner[i].strMealThumb+")";
    myDiv.style.backgroundSize = "cover";
    myDiv.style.overflowY = "scroll";
    myDiv.style.height = "200px";

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
    myDiv.appendChild(myPara1);
    myDiv.appendChild(myPara2);
    myDiv.appendChild(myPara3);
    section.appendChild(myDiv);
  }
}
