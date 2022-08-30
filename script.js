

function board(size){
    let container = document.querySelector('.container');
    let squares = container.querySelectorAll("div")
    squares.forEach((div) => div.remove())
    container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    container.style.gridTempleteRows = `reapeat(${size} , 1fr)`;

    for (i = 0 ; i < (size * size); i++ ){
        let pixels = document.createElement('div')
        pixels.addEventListener('mouseover',colorSelection)
        pixels.style.backgroundColor = "white";
        container.insertAdjacentElement('beforeend' , pixels) 
    }
}
  
let color = 'black';  

function colorSelection() {
    if (color === 'random') {
        this.style.backgroundColor = getRandomColor();
    }
    else{
        this.style.backgroundColor = color;
    }      
}

function changeColor(choice) {
    color = choice;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

function changeSize(input){
    board(input);
}

