
var family = ["chef/Dad.png", "chef/Mom.png", "chef/Gnat.png", "chef/Ginger.png", "chef/Cool.png", "chef/gmaJ.png", ""];

var empty = [3, 5, 2, 1, 0, 5, 2];
var clear = [0, 2, 4, 3, 0, 1, 6];
var wash  = [1, 3, 2, 0, 3, 2, 0];

function addChores() {
  var chore = document.getElementsByClassName('chore');

  if (chore[0] ==  undefined) {
    var dinner    = document.getElementsByClassName('dinner');

    for (var i = 0; i < 7; i++) {

      // add Empty the dishwasher chore
      var w = document.createElement('p');
      w.setAttribute("class", "chore");

      var sp = document.createElement('div');
      sp.innerHTML = "Empty the dishwasher";
      // w.appendChild(sp);

      var washDishes = document.createElement('img');
      washDishes.setAttribute('src', family[empty[i]]);
      w.appendChild(washDishes);
      // dinner[i].insertBefore(w, dinner[i].childNodes[2]);

      // add Clear the table chore
      var box = document.createElement('p');
      var clearWipe = document.createElement('img');
      clearWipe.setAttribute('src', family[clear[i]]);
      box.setAttribute('class', 'chore');
      var sp = document.createElement('span');
      sp.innerHTML = "Clear/Wipe the table";
      box.appendChild(clearWipe);
      box.appendChild(sp);
      var br = document.createElement('br');
      box.appendChild(br);
      dinner[i].insertBefore(box, dinner[i].childNodes[3]);

      // add Wash the dishes chore
      var w = document.createElement('p');
      w.setAttribute("class", "chore");

      var sp = document.createElement('div');
      sp.innerHTML = "Wash dishes";
      w.appendChild(sp);

      var washDishes = document.createElement('img');
      washDishes.setAttribute('src', family[wash[i]]);
      w.appendChild(washDishes);
      dinner[i].insertBefore(w, dinner[i].childNodes[4  ]);

    }

  } else if (chore[0].style.display == "none") {
    for (var i = 0; i < chore.length; i++) { 
      chore[i].style.display = "block";
    }
  } else { 
    for (var i = 0; i < chore.length; i++) { 
      chore[i].style.display = "none";
    }
  }
};
