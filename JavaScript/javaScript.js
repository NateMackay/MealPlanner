
function forloop() { 
  var ourcars = ["Toyota Prius", "Honda Civic", "VW Jetta"]; 
  var text = ""; 
  var i;

  for (i = 0; i < ourcars.length; i++) {
    text += ourcars[i] + "<br>";
  }
  document.getElementById("forloop").innerHTML = text;
};


function whileloop() { 
  var whilecars = ["2019 Bugatti", "2018 Dodge Charllenger SRT Demon", "2020 McLaren", "2019 Lamborghini"];
  var whiletext = "";
  var i=0;

  while (whilecars[i]) {
    whiletext += whilecars[i] + "<br>";
    i++;
  }

  document.getElementById("whileloop").innerHTML = whiletext;
};


function conditions() { 
  var message;
  var hour = new Date().getHours();
  var minutes = new Date().getMinutes();
  
  if (hour < 12) {
    message = "   Good morning";
  } else if (hour < 18) {
    message = "   Good day";
  } else {
    message = "   Good evening";
  }

  message += ". Your time is " + hour + ":" + minutes;
  document.getElementById("condition").innerHTML = message;
};


function switches() { 
  var message;
  var day = new Date().getDay();
  days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  switch (days[day]) { 
    case "Monday":
    case "Tuesday": 
      message = "It is the beginning of the week.";
      break;
    case "Wednesday":
      message = "It is the middle of the week.";
      break;
    case "Thursday":
    case "Friday":
      message = "It is the end of the week.";
      break;
    default:
      message = "It is the weekend."
  }
  message += " The day is " + days[day] + ".";

  document.getElementById("switch").innerHTML = message;  
}


function cubed(item, placement) { 
  var amount = item.value;
  message = amount + " cubed equals "
  document.getElementById(placement.id).innerHTML = message + (amount * amount * amount);
};

function cubed2() { 
  document.getElementById("functions2").innerHTML = cubed;
}

function variables() { 
  text = "";
  text = '<table>'
  text += '<tr><td width="225px">var name;</td><td>//declare a variable and leave it undefined </td></tr>';
  text += '<tr><td>var 2021Salary = 2,000,000;</td><td>//declare a variable and assign a value</td></tr>';
  text += '<tr><td>name = "Johan Baer";</td><td>//assign a value to a previously declared variable </td></tr>';
  text += '<tr><td>var kids = 3, car = "Civic";</td><td>//declare and assign multiples at once</td></tr></table>';
  document.getElementById("variable").innerHTML = text;
};


function parameters() { 
  var i, text = "";
  text += "You like "
  
  for (i = 0; i < arguments.length - 1; i++) { 
    text += arguments[i].value + ", ";
  }
  if (i > 1) { text += " and " }
  text += arguments[i].value + ".";
  
  document.getElementById("parameter").innerHTML = text;
};


function arrays() { 
  var group5 = ["Joseph", "Pedro", "Vitalii"];
  message = 'var group5 = ["Joseph", "Pedro", "Vitalii"]; <br>'
  message += "The array named group5 contains " + group5.toString() + "<br><br>";

  message += 'We can add something to the array using push() <br> group5.push("Nate"); <br>';
  group5.push("Nate");
  message += "Now the array contains " + group5.toString() + "<br><br>";
  message += "sorting this array will give us this " + group5.sort() + "<br>";


  document.getElementById("array").innerHTML = message;
};


