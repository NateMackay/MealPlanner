
var sn1 = [ "peanut butter", "protein bar", "almonds", "hard boiled egg", "fruit", "applesauce", "cottage cheese", "nuts", "string cheese", "yogurt", "toast & jam", "chips", "veggies", "pretzels", "apples & cheese", "cheese/crackers"];
var sn2 = ["cheese", "veggies & dip", "yogurt", "protein bar", "hard boiled egg", "fruit", "graham crackers & milk", "peanut butter toast"];

function addSnacks() {
  var snack1 = document.getElementsByClassName('snack1');
  var snack2 = document.getElementsByClassName('snack2');

  if (snack1[0].childElementCount < 1) {
    for (var i = 0; i < 7; i++) {
      var title1 = document.createElement('h4');
      title1.innerHTML = "Snack";
      snack1[i].appendChild(title1);
      var sn = document.createElement('p');
      sn.innerHTML = sn1[(i + 0) % sn1.length];
      snack1[i].appendChild(sn);
      snack1[i].style.display = "block";

      var title2 = document.createElement('h4');
      title2.innerHTML = "Snack";
      snack2[i].appendChild(title2);
      var sn = document.createElement('p');
      sn.innerHTML = sn2[(i + 0) % sn2.length];
      snack2[i].appendChild(sn);
      snack2[i].style.display = "block";
    }
  } else if (snack1[0].style.display == 'none') {
    for (var i = 0; i < 7; i++) { 
      snack1[i].style.display = "block";
      snack2[i].style.display = "block";
    }
  } else {
    for (var i = 0; i < 7; i++) { 
      snack1[i].style.display = 'none';
      snack2[i].style.display = 'none';
    }
  }
}
