
// function randomColor() {
//     var r = Math.floor(Math.random() * 255);
//     var g = Math.floor(Math.random() * 255);
//     var b = Math.floor(Math.random() * 255);
//     return "rgb(" + r + "," + g + "," + b + ")";
// }

// function changeColor() {
//     // TODO 
//     // set the body background to random color
//     document.body.style.background=randomColor()

// }

// // click on browser window to change color
// document.addEventListener('click', changeColor);





function colors(){
    let r =Math.floor(Math.random()*255);
    let g =Math.floor(Math.random()*255);
    let b =Math.floor(Math.random()*255);
    return "rgb("+ r +","+g+","+b+")";
}

function randomcolors(){
    document.body.style.background=colors();
}

document.addEventListener('click',randomcolors);