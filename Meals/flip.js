
function flip(box) { 

  if (box.style.transform != 'rotateY(180deg)') {
    box.style.transform = 'rotateY(180deg)';
  } else {
    box.style.transform = 'rotateY(360deg)';
  }
}

