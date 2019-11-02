
//create the table with DOM manipulation
function displayData() { 

  //JSON data storage
  for (i = 0; i < localStorage.length; i++) {
    text = localStorage.getItem(localStorage.key(i));
    myObj = JSON.parse(text);
  
    //create a row
    var row = document.createElement("tr");
      //create a cell item
      var item = document.createElement("td");
        //store index value in a cell
        item.innerHTML = (i + 1);
        row.appendChild(item);
      var cellName = document.createElement("td");

        //store name value in a cell
        cellName.innerHTML = (localStorage.key(i));
        row.appendChild(cellName);
      var hobby = document.createElement("td");

        //store hobby value in a cell
        hobby.innerHTML = (myObj.hobbies);
        row.appendChild(hobby);
      var sibs = document.createElement("td");
  
        //store siblings value in a cell
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