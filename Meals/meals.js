
function populate() {
document.getElementById('breakfast').innerHTML = "oatmeal"
document.getElementById('lunch').innerHTML = "ramen"
document.getElementById('dinner').innerHTML = "soup"
document.getElementById('populate').style.animation = '';
document.getElementById('populate').style.display = 'none';
}

function addAnimate() { 
  document.getElementById('populate').style.animation = 'press 1.5s infinite linear alternate';
}