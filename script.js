const grid = document.getElementById("grid");
const clearBtn = document.getElementById("clear");
const gridBtn = document.getElementById("newGrid");

makeGrid();
number = 12;

gridBtn.addEventListener('click', function(e){
    var size = prompt("Please enter a number between 1 and 100");
    if (size != null && size >= 1 && size <= 100) {
        makeNewGrid(size);
    }
    else{
        alert("Incorrect number, try again");
    }
})

function makeGrid(){
    for (i = 0; i<256; i++){
        const div = document.createElement("div");
        div.style.border = "2px solid black";
        grid.appendChild(div).className="row";
    }
    
}

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function makeGrid(){
    grid.setAttribute('style', `grid-template-columns: repeat(${16}, 2fr); grid-template-rows: repeat(${16}, 2fr);`);
    for (let i = 0; i < 16*16; i++) {
        const div = document.createElement('div');
        div.style.border = "2px solid black";
        div.addEventListener('mouseover', function(event){
            div.classList.add('fill');
        })
        clearBtn.addEventListener('click', function(event){
            div.classList.remove('fill');
        })
        grid.appendChild(div).className="row"; 
    }
}

function makeNewGrid(number){
    removeAllChildNodes(grid);
    grid.setAttribute('style', `grid-template-columns: repeat(${number}, 2fr); grid-template-rows: repeat(${number}, 2fr);`);
    for (let i = 0; i < number*number; i++) {
        const div = document.createElement('div');
        div.style.border = "2px solid black";
        div.addEventListener('mouseover', function(event){
            div.classList.add('fill');
        })
        clearBtn.addEventListener('click', function(event){
            div.classList.remove('fill');
        })
        grid.appendChild(div).className="row"; 
    }
}