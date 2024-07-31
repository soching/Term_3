function randomColors(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    return 'rgb('+r+','+g+','+b+')'
}
document.body.style.background=randomColors();






// function randomColors(){
//     let r=Math.floor(Math.random()*255);
//     let g=Math.floor(Math.random()*255);
//     let b=Math.floor(Math.random()*255);
//     return document.body.style.background='rgb('+r+','+g+','+b+')';

// }
// // window.addEventListener('click',randomColors)
// setInterval(randomColors,1000)