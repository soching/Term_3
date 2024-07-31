


function changeColor() {
    let x =inputColor.value;
    document.body.style.backgroundColor=x;
    // TODO
    // change body color to color that get from input type color 
}

// Main
const inputColor = document.querySelector('#color')

// click on browser window to change color
document.addEventListener('change', changeColor)