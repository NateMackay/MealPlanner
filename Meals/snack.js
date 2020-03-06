
var sn1 = [ "peanut butter sandwich", "graham crackers & milk", "protein bar & almonds", "hard boiled egg", "fruit", "applesauce & cottage cheese", "nuts & string cheese", "toast & yogurt"];
var sn2 = ["orange & cheese", "veggies & dip", "protein bar", "yogurt", "hard boiled egg", "peanut butter toast"];

function addSnacks() {
  var snack1 = document.getElementsByClassName('snack1');
  var snack2 = document.getElementsByClassName('snack2');

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
}
