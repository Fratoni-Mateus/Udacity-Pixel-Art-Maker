var tableRef = document.getElementById("pixelCanvas");
var form = document.getElementById("sizePicker");

form.addEventListener("submit",makeGrid);

//Identifies if the table node has childs and remove them if true.
function deleteGrid(){
    if (tableRef.hasChildNodes()){
        let tableContent = tableRef.firstElementChild;
        tableRef.removeChild(tableContent);
    }
}

//Prevents the page from refreshing and creates a grid canvas.
function makeGrid(evt) {
    evt.preventDefault();
    let height = document.getElementById("inputHeight");
    deleteGrid();  
    for (rows=1; rows <= height.value; ++rows){
        let width = document.getElementById("inputWidth");
        let newRow = tableRef.insertRow(0);
        for (columns=1; columns <= width.value; ++columns){
            let newCell = newRow.insertCell(0);
            newCell.appendChild(document.createTextNode(""));
        }
    }
}

//The use of mousedown instead of click is to avoid undesired behavior.
tableRef.addEventListener("mousedown",respondToTheClick);

//Paints the clicked square on the canvas.
function respondToTheClick(evt) {
    var brushColor = document.getElementById("colorPicker");
    evt.target.style.backgroundColor = brushColor.value;
}