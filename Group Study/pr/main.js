// let li = document.getElementById('Teacher');
// let li4 =li.parentElement.previousElementSibling;
// let container = document.querySelector('.container');
// let children =container.firstElementChild
// console.log(children)

let container= document.querySelector('.container')
let div = document.createElement('div')
div.classList.add('group')
let h1 = document.createElement('h1')
h1.textContent='hello group study'
div.appendChild(h1)
container.appendChild(div)
console.log(h1)
let div1= document.createElement('div')
let ul=document.createElement('ul')
let li1 =document.createElement('li')
li1.textContent='hello'
ul.appendChild(li1)
let li2=document.createElement('li')
li2.textContent='love'
ul.appendChild(li2)
div1.appendChild(ul)
div.appendChild(div1)
console.log(div)

