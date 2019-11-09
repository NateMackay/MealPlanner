
function race(){ 
  document.getElementById('racer1').style.transition = 'width 4s linear';
  document.getElementById('racer2').style.transition = 'width 4s ease-in-out';
  document.getElementById('racer3').style.transition = 'width 4s cubic-bezier(1, 0, 0, 1)';
  document.getElementById('racer4').style.transition = 'width 4s cubic-bezier(0, -.1, 0, -1)';
  document.getElementById('racer5').style.transition = 'width 4s ease-in';
  document.getElementById('racer6').style.transition = 'width 4s ease-out';
};

function infiniteRace() { 
  document.getElementById('racer1').style.animation = 'races 3s infinite alternate';
  document.getElementById('racer2').style.animation = 'races 3s infinite alternate';
  document.getElementById('racer3').style.animation = 'races 3s infinite alternate';
  document.getElementById('racer4').style.animation = 'races 3s infinite alternate';
  document.getElementById('racer5').style.animation = 'races 3s infinite alternate';
  document.getElementById('racer6').style.animation = 'races 3s infinite alternate';

  document.getElementById('racer1').style.animationTimingFunction = 'cubic-bezier(0, 0, 1, 1)';
  document.getElementById('racer2').style.animationTimingFunction = 'cubic-bezier(0.42, 0, 0.58, 1)';
  document.getElementById('racer3').style.animationTimingFunction = 'cubic-bezier(1, 0, 0, 1)';
  document.getElementById('racer4').style.animationTimingFunction = 'cubic-bezier(0, -.1, 0, -1)';
  document.getElementById('racer5').style.animationTimingFunction = 'cubic-bezier(0.42, 0, 1, 1)';
  document.getElementById('racer6').style.animationTimingFunction = 'cubic-bezier(0, 0, 0.58, 1)';

};

function rotatex() { 
  document.getElementById('brotherBaer2').style.transform = 'rotateX(360deg)';
};

function rotatey() { 
  document.getElementById('brotherBaer2').style.transform = 'rotateY(360deg)';
};
