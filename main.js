
/* 

*/

const myContainer=document.querySelector(".container");

function makeGrid(columns,rows){
    // select container and create rows and columns
    myContainer.style.gridTemplateColumns =`repeat(${columns}, 1fr)`; //makes columns based on param value
    myContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;//makes rows based on param value
   
    for(let i=0;i<columns*rows;i++){ // makes 256 cells
        let gridCells=document.createElement("div");
        gridCells.textContent=i + 1; // make sure we have the correct amount,will remove later
        myContainer.appendChild(gridCells).classList.add("grid-items");
   }
   
}
makeGrid(16,16);
