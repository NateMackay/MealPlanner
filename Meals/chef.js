
var family = ["chef/Dad.png", "chef/Mom.png", "chef/Gnat.png", "chef/Ginger.png", "chef/Cool.png", "chef/gmaJ.png", "chef/non.png"];
var d = [0, 2, 5, 3, 5, 0, 6];

function addChefs() {
  var chef = document.getElementsByClassName('chef');

  if (chef[0] ==  undefined) {
    var breakfast = document.getElementsByClassName('breakfastMeal'); 
    var lunch     = document.getElementsByClassName('lunchMeal'); 
    var dinner    = document.getElementsByClassName('dinChef');

    for (var i = 0; i < 7; i++) {

      var bChef = document.createElement('img');
      bChef.setAttribute('src', family[(i + 0) % (family.length - 2)]);
      bChef.setAttribute('class', 'chef');
      breakfast[i].insertBefore(bChef, breakfast[i].childNodes[0]);

      var lChef = document.createElement('img');
      lChef.setAttribute('src', family[(i + 2) % (family.length - 2)]);
      lChef.setAttribute("class", "chef");
      lunch[i].insertBefore(lChef, lunch[i].childNodes[2]);

      var dChef = document.createElement('img');
      dChef.setAttribute('src', family[d[i]]);
      dChef.setAttribute("class", "chef");
      dinner[i].appendChild(dChef);

    }

  } else if (chef[0].style.display == "none") {
    for (var i = 0; i < chef.length; i++) { 
      chef[i].style.display = "block";
    }
  } else { 
    for (var i = 0; i < chef.length; i++) { 
      chef[i].style.display = "none";
    }
  }
};
