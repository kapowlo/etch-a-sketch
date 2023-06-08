

let color="rgb(0,0,0)";//default color is set to blue,when user mouse over grid the bg color will be black

const myContainer=document.querySelector(".container");
const resetButton=document.querySelector(".btn-reset");

// create two buttons randomColor and blackColor 
const randomColorButton=document.createElement("button");
randomColorButton.textContent="Random Color";
randomColorButton.classList.add("btn","btn-random")

const greenColorButton=document.createElement("button");
greenColorButton.textContent="Shades of green";
greenColorButton.classList.add("btn","btn-green")

// append buttons to container div
myContainer.append(randomColorButton,greenColorButton);


//this func when called makes a grid, the size of the grid is based on user input
//but only if input is valid otherwise the grid will have 256cells by default 16*16=256
function makeGrid(columns,rows){
    myContainer.style.gridTemplateColumns =`repeat(${columns}, 1fr)`; //makes columns based on param value
    myContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;//makes rows based on param value
   
    for(let i=0;i<columns*rows;i++){ // if param 1=16 and param 2=16 this for loop will create 256cells
        let gridCells=document.createElement("div");
        
        myContainer.appendChild(gridCells).classList.add("grid-items"); // adds all the divs created to container div
        
        gridCells.addEventListener("mouseover",(cell)=>{ //when user has his mouse hover over a cell 
            cell.target.style.backgroundColor=color;  //the bg color of that particular cell will change 
        })
   }
   
}
makeGrid(30,30); // start with a default grid of 256 cells better user experience to start with a default grid right away.

resetButton.addEventListener("click",resetGridSize);
function resetGridSize(){
    //remove the grid,then prompts user for new size,if input is valid make new grid otherwise remake default grid 16 by 16
    myContainer.querySelectorAll(".grid-items").forEach(cell=>{
        cell.remove();
    });

    const askGridSize=Number(prompt("what size do you want the grid to be,anything above 0 and below 100 is valid"))
   
    if(askGridSize>100 || askGridSize<=0){ //if user presses ESC/cancel, or enters nothing run this if code block
        let msg=alert("please enter a valid input...remaking default grid");
        color="rgb(0,0,0)" //fixes a bug after clicking on black button and resetting the grid, cell color would be another color instead of default black
        makeGrid(30,30);
        return msg;
    }
    else if(isNaN(askGridSize)){
        msg=alert("Letters are not allowed...Numbers only!");
        return msg;
    }
    else{
        color="rgb(0,0,0)" //fixes a bug after clicking on black button and resetting the grid, cell color would be another color instead of default black
        makeGrid(askGridSize,askGridSize); // make a grid, the size is based on the user input
    }
}

//after user clicks on this button, when they mouse over a grid cell the bg color will be different shades of green
greenColorButton.addEventListener("click",()=>{
   myContainer.querySelectorAll(".grid-items").forEach(cell=>{
    cell.addEventListener("mouseover",()=>{
        let rValue=Math.floor(Math.random()*10)// low value for red pick between 0 and 10
        let gValue=Math.floor(Math.random()*255) // highest value for green, I want to guarantee 255 here
        let bValue=Math.floor(Math.random()*10) // low value for blue pick between 0 and 10
        color=`rgb(${rValue},${gValue},${bValue})`;//since gvalue is highest the generated color will be different shades of green
        cell.style.backgroundColor=color; //this line fixed a bug where the bg color would not instantly be changed
    })
   })
})

//after user clicks on this button, when they mouse over a grid cell the bg color will be random
randomColorButton.addEventListener("click",()=>{
    // select all the elements with class .grid-items loop through each of them and add an eventlistener
    //use math to generate a random number round that number and multiply by 255
    myContainer.querySelectorAll(".grid-items").forEach(cell=>{
        cell.addEventListener("mouseover",()=>{
            let rValue=Math.floor(Math.random()*200); 
            let gValue=Math.floor(Math.random()*200); 
            let bValue=Math.floor(Math.random()*200); 
            color=`rgb(${rValue},${gValue},${bValue})`
            cell.style.backgroundColor=color; //this line fixed a bug where the bg color would not instantly be changed
        })
       
    })
    
})
