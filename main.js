
/* 

*/

const myContainer=document.querySelector(".container");
const resetButton=document.querySelector(".btn-reset")

function makeGrid(columns,rows){
    // create amount of rows and columns based on param values
    myContainer.style.gridTemplateColumns =`repeat(${columns}, 1fr)`; //makes columns based on param value
    myContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;//makes rows based on param value
   
    for(let i=0;i<columns*rows;i++){ // if param 1=16 and param 2 =16 this for loop will create 256cells
        let gridCells=document.createElement("div");
        //gridCells.textContent=i + 1; // make sure we have the correct amount,will remove later
        myContainer.appendChild(gridCells).classList.add("grid-items");
        
        gridCells.addEventListener("mouseover",(cell)=>{ //when user has his mouse hover over a cell 
            cell.target.style.backgroundColor="orange";  //the bg color of that particular cell will change
        })
   }
   
}
makeGrid(16,16);

resetButton.addEventListener("click",resetGridSize);
function resetGridSize(){
    //remove the grid,then prompts user for new size,if input is valid make new grid otherwise remake default grid 16 by 16
    myContainer.querySelectorAll(".grid-items").forEach(cell=>{
        cell.remove();
    });
    const askGridSize=Number(prompt("what size do you want the grid to be,anything above 0 and below 100 is valid"))
    if(askGridSize>100 || askGridSize<=0){ //if user presses ESC/cancel, or enters nothing run this if code block
        let msg=alert("please enter a valid input...remaking default grid");
        makeGrid(16,16);
        return msg;
    }
    else if(isNaN(askGridSize)){
        msg=alert("Letters are not allowed...Numbers only!");
        return msg;
    }
    else{
        makeGrid(askGridSize,askGridSize);
    }
}