

const board = document.querySelector('.container');
const resize = document.querySelector('.resize');
const black = document.querySelector('.black');
const rgb = document.querySelector('.rgb');
const erase = document.querySelector('.erase');
const clear = document.querySelector('.clear');


let mode = 1;


function makeBoard(size) {
    for(let x=0; x<Math.pow(size, 2);x++) {
        const cell = document.createElement("div"); 
        cell.className = "cell"; 
        board.appendChild(cell);
    }

    const cells = document.querySelectorAll('.cell');
    cells.forEach(key => key.addEventListener('mouseover', () => 
    {
        if (mode == 1) {
            fill(key);
        }
        else if (mode == 2) {
            rgbfill(key);
        }
        else {
            erasefill(key);
        }
    }));

    resize.addEventListener('click', () => {resizeGrid()});
    black.addEventListener('click', () => {mode = 1;});
    rgb.addEventListener('click', () => {mode = 2;});
    erase.addEventListener('click', () => {mode = 3;});
    clear.addEventListener('click', () => {clearBoard()});
}

function clearBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(key => key.style.backgroundColor = 'white');

}

function fill(e) {
    e.style.backgroundColor = 'black';
}

function rgbfill(e) {
    const c1 = Math.random() * 256;
    const c2 = Math.random() * 256;
    const c3 = Math.random() * 256;
    e.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
}

function erasefill(e) {
    e.style.backgroundColor = 'white';
}

function resizeGrid() {
    let size = 101;

    while (size < 10 || size > 100) {
        size = parseInt(prompt("Enter a new size: Must be between 10 and 100 inclusive)"));
        console.log(size.toString());
    }

    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    makeBoard(size); 
}

makeBoard(100);