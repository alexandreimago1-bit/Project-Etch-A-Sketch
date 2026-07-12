//Variables
let mySlider = document.getElementById('sizeSlider')
let myNewGridBtn = document.getElementById('newGridBtn')
let myContainer = document.getElementById('gridContainer')
let sizeDisplay = document.getElementById('sizeValue')
let myResetBtn = document.getElementById('resetBtn')
let isDrawing = false;


// Grid Size 
function gridSizeChanger(size){
    myContainer.innerHTML = '';
    myContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    myContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`

     for (let i = 0; i < size * size ; i++){
        const cell = document.createElement('div')
        cell.classList.add('cell')

        cell.addEventListener('mousedown', () => {
            isDrawing = true;
            cell.classList.add('active');
        });

        cell.addEventListener('mousedown', () => {
            if (isDrawing) {
                cell.classList.add('active');
            }
        });

        myContainer.appendChild(cell)
     }
}
// Slider Function
mySlider.addEventListener('input', (e) => {
    sizeDisplay.textContent = e.target.value;
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
