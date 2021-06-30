//Sets important constants and variables

const container = document.getElementById("container");
const rows = document.getElementsByClassName("gridRow");
const cells = document.getElementsByClassName("gridCell");
const btn = document.getElementById("clear");

makeGrid(12);
enableListeners();

function myFunction() {
    var size = prompt("Please enter a number between 2 and 34", "12");
    var rightSize = false;
    if ( size>34 || size < 2){
        alert("Incorrect grid size, only choose between 2 and 34.");
    }
    else{
        rightSize = true;
        if (size != null) {
            while (container.firstChild) {
                container.removeChild(container.lastChild);
              }
            makeGrid(size);
            enableListeners();
        }
    }
  }

function makeGrid(gridSize){
    makeRows(gridSize);
    makeCells(gridSize);
}


function makeRows(number){
    for (i=0; i<number; i++){
        const row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    }
}

function makeCells(number){
    for (i = 0; i<rows.length; i++){
        for (j = 0; j< number; j++){
            const cell = document.createElement("div");
            rows[i].appendChild(cell).className = "gridCell";
        }
    }
}

// Event Listeners - to add hovered class and remove hovered class
function enableListeners(){
    for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mouseover', function(){
            this.classList.add('hovered');
        }, false);
    }
    
    btn.addEventListener('click', function(event){
        for (var i = 0; i < cells.length; i++) {
            cells[i].classList.remove('hovered');
        }
    }, false);
}