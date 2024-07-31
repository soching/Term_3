
//auto change colors
function randomcolors() {
    const colorCode = ['0', '1', '2', '3', '4', '5', '6', '7', '8','9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let color='#';
    for(i=0 ; i<6 ; i++){
        let index = Math.floor(Math.random()*colorCode.length);
        color+=(colorCode[index]);
    }
    document.body.style.background=color;
}
setInterval(randomcolors,1000);




// when you click refrest it will display change colors
// const colorCode = ['0', '1', '2', '3', '4', '5', '6', '7', '8','9', 'a', 'b', 'c', 'd', 'e', 'f']
// let color='#';
// for(i=0 ; i<6 ; i++){
//     let index = Math.floor(Math.random()*colorCode.length);
//     color+=(colorCode[index]);
// };
// document.body.style.background=color;
















// Loop 6 times to get the color code by random from items in array
// https://www.w3schools.com/js/js_random.asp


// set background color to body =  color code


// add text content to h1 = color code









































// Loop 6 times to get the color code by random from items in array
// https://www.w3schools.com/js/js_random.asp


// set background color to body =  color code


// add text content to h1 = color code