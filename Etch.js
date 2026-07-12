//Variables
let sizePromptBtn = document.getElementById('sizePromptBtn')
let myNewGridBtn = document.getElementById('newGridBtn')
let myContainer = document.getElementById('gridContainer')
let sizeDisplay = document.getElementById('sizeValue')
let myResetBtn = document.getElementById('resetBtn')
let isDrawing = false;


// Grid Size 
function gridSizeChanger(size){
    myContainer.innerHTML = '';
  
    const cellSize = 400/size;
    for(let i = 0; i < size * size  ; i++ ){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.width = `${cellSize}px`;
         cell.style.height = `${cellSize}px`;
         cell.addEventListener('mousedown', () => paintCell(cell));
        cell.addEventListener('mouseover', (e) => {
            if (e.buttons === 1) { // Checks if left mouse is held down
                paintCell(cell);
            }
        });

         myContainer.appendChild(cell)
    }
}

// Size Prompt

sizePromptBtn.addEventListener('click',() => {
    let newSize = prompt("Enter number of squares per side(max of 100)");
    newSize = parseInt(newSize)
    if (newSize > 0 && newSize <= 100){
        gridSizeChanger(newSize)
    }else {
        return alert("Please Enter a number between 1 and 100")
    }
})

// Grid Btn
myNewGridBtn.addEventListener('click' , () => {
    const requestedSize = mySlider.value;
    gridSizeChanger(requestedSize)
})

// resetBtn
function resetGrid(){
    const cells = document.querySelectorAll('.cell')
    cells.forEach(cell => {
        cell.classList.remove('active');
        cell.style.backgroundColor = ''
    });
}

myResetBtn.addEventListener('click', () => {
    resetGrid()
})
//RandomColor
function getRandomColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`
}
function paintCell(cell){
    cell.style.backgroundColor = getRandomColor()
}