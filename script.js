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

function changeSize(input){
    board(input);
}
  
let color = 'black';  //default

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
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

// function for button black
let btnBlack = document.getElementById('black');
btnBlack.addEventListener('click',()=>{
    changeColor('black');
    btnBlack.classList.add('button-glow');
    setTimeout(() => btnBlack.classList.remove('button-glow'), 100);
})

//function for button eraser
let btnWhite = document.getElementById('white');
btnWhite.addEventListener('click',()=>{
    changeColor('white');
    btnWhite.classList.add('button-glow');
    setTimeout(() => btnWhite.classList.remove('button-glow'), 100);
})

//function for button randon
let btnRandom = document.getElementById('random')
btnRandom.addEventListener('click',()=>{
    changeColor('random');
    btnRandom.classList.add('button-glow');
    setTimeout(() => btnRandom.classList.remove('button-glow'), 100);
})

//function for button clear
let btnClear = document.getElementById('clear')
btnClear.addEventListener('click',()=>{
    let container = document.querySelector('.container');
    let squares = container.querySelectorAll("div")
    squares.forEach((div) => div.style.backgroundColor = 'white')
    btnClear.classList.add('button-glow');
    setTimeout(() => btnClear.classList.remove('button-glow'), 100);
})

// input range 
let slider = document.querySelector('#slider');
let screenDisp = document.querySelector('#rangeValue');
slider.addEventListener('input' , ()=> {
    let val = document.getElementById('slider').value;
    screenDisp.textContent = `${val} X ${val}`;
})
