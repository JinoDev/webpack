//generate a table
export function generateTable(parentElem, rows, cols) {
    // body
  
    //create a table using DOM createElement
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
  
    //first row
    //for (let i = 0; i < 1; i++){
    let tr = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      let th = document.createElement("th");
      th.innerText = `Col-${j}`;
      tr.appendChild(th);
    }
  
    thead.appendChild(tr);
    //}
  
    // other rows
    for (let i = 0; i < rows; i++) {
      let tr = document.createElement("tr");
      for (let j = 0; j < cols; j++) {
        let td = document.createElement("td");
        td.innerText = 'cell' + j;
        td.style.textAlign = 'center';
        tr.appendChild(td);
      }
  
      tbody.appendChild(tr);
    }
  
    table.appendChild(thead);
    table.appendChild(tbody);
  
    parentElem.appendChild(table);
  
    table.style.borderCollapse = "collapse";
    table.style.width = "50vw";
    table.style.marginTop = "10px";
    table.style.backgroundColor = "";

  };