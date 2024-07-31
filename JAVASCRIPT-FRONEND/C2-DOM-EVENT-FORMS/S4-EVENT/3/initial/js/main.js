const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let btn = document.querySelector('button');
let color=document.getElementById('result-color');

function colorCode() {
   let color1='#'
   for(i=0 ; i<6 ;i++){
      color1+=hex[getRandomColor()]
   }

   color.textContent=color1;
   color.style.color=color1;
   document.body.style.background=color1;
}

function getRandomColor() {
   let s=Math.floor(Math.random()*hex.length);
   return s ;
   
}

btn.addEventListener('click', function () {
   colorCode();
})