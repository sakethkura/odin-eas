

const board = document.querySelector('.container');
const resize = document.querySelector('.resize');

function makeBoard(size) {
    for(let x=0; x<Math.pow(size, 2);x++) {
        const cell = document.createElement("div"); 
        cell.className = "cell"; 
        board.appendChild(cell);
    }

    const cells = document.querySelectorAll('.cell');
    cells.forEach(key => key.addEventListener('mouseover', () => {fill(key)}));

    resize.addEventListener('click', () => {resizeGrid()});
}

function fill(e) {
    e.classList.add('black_hovered');
}

function erase(e) {
    e.classList.remove('black_hovered');
}

function resizeGrid() {
    let size = 0;

    do {
        size = parseInt(prompt("Enter a new size: Must be 100 or below)"));
      } while (size > 100);

    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    makeBoard(size); 
}

makeBoard(100);