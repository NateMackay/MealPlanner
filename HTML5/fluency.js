function showAudio() { 
  document.getElementById('hiddenAudio').style.display = "block";
};

function changeWidth() { 
  if (document.getElementById('canvasTag').style.width != "500px") { 
    document.getElementById('canvasTag').style.width = "500px";
  } 
  else { 
    document.getElementById('canvasTag').style.width = "240px";
  }
}