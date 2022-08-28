
let test = document.getElementById('rangebar');
test.addEventListener('input', ()=> {console.log(test.value);} )

function board(size){
    let container = document.querySelector('.container');
    container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    container.style.gridTempleteRows = `reapeat(${size} , 1fr)`;

    //console.log(`reapeat (${size} , 1fr)`);

    for (i = 0 ; i < (size ** 2); i++ ){
        let pixels = document.createElement('div')
        pixels.style.backgroundColor = "white";
        container.insertAdjacentElement('beforeend' , pixels)
    }
}

board(16);

function changeSize(){

}