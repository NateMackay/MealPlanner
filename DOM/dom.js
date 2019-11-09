
//create the table with DOM manipulation
function displayData() { 

  //JSON data storage
  for (i = 0; i < localStorage.length; i++) {
    text = localStorage.getItem(localStorage.key(i));
    myObj = JSON.parse(text);
  
    //create a row
    var row = document.createElement("tr");
      //create a cell item, store the index
      var item = document.createElement("td");
        item.innerHTML = (i + 1);
        row.appendChild(item);

      //store name value in a cell
      var cellName = document.createElement("td");
        cellName.innerHTML = (localStorage.key(i));
        row.appendChild(cellName);

      //store hobby value in a cell
      var hobby = document.createElement("td");
        hobby.innerHTML = (myObj.hobbies);
        row.appendChild(hobby);

      //store siblings value in a cell
      var sibs = document.createElement("td");
        sibs.innerHTML = (myObj.siblings);
        row.appendChild(sibs); 
    
    //create an id for the row 
    row.setAttribute("id", i + 1);

    //add the row to the table
    document.getElementById('displayTable').appendChild(row);

    addDeleteButtons();  
  }
}


//JSON data storage 
function storeData(fname, hobby, sibs) { 
  myObj = {hobbies: hobby.value, siblings: sibs.value};
  myData = JSON.stringify(myObj);
  localStorage.setItem(fname.value, myData);
}


//delete the last row in the table
function removeLastItem() { 
  var table = document.getElementById('displayTable');
  table.removeChild(table.lastElementChild);
}


//delete the first row after the heading in the table
function removeFirstItem() { 
  var table = document.getElementById('displayTable');
  table.removeChild(table.childNodes[2]);
}


//add buttons without DOM manipulation
function addDeleteButtons() { 
  text = '<h3>Delete table items with DOM manipulation</h3>' + 
         '<input type="button" value="Delete the first item" onclick="removeFirstItem()">' + 
         '<input type="button" value="Delete the last item" onclick="removeLastItem()">';
  document.getElementById('deleteButtons').innerHTML = text;
}