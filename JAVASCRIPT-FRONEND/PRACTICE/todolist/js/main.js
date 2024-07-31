
function createCard(titleCard){

let body = document.querySelector('body');
let div =document.createElement('div');
div.classList='container';
let div1 =document.createElement('div');
div1.classList='row';
let div2 =document.createElement('div');
div2.classList='col-6 mt-5';
let h2= document.createElement('h2');
h2.textContent=titleCard;
let div3= document.createElement('div');
div3.classList='row'
let div4 =document.createElement('div');
div4.classList='card p-4 border-danger mt-2';
let span=document.createElement('span')
let input=document.createElement('input');

input.setAttribute('type','checkbox');
input.setAttribute('name','markAsDone');
input.id='="markAsDone';
let p = document.createElement('p');
p.textContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. tiae voluptates labore?';

let a =document.createElement('a');
a.setAttribute('href','google.come');
a.textContent='read more';

let div5 =document.createElement('div');
div5.classList='btn btn-danger';
div5.textContent='Delete';

body.appendChild(div);
div.appendChild(div1);
div1.appendChild(div2);
div2.appendChild(h2);
div2.appendChild(div3);
div3.appendChild(div4);
span.appendChild(input);
div4.appendChild(span);
span.appendChild(p);
span.appendChild(a);
div4.appendChild(div5);
}

array=[
    {name: 'Task1',link:'gogle.come'},
    {name: 'Task2',link:'gogle.come'},
    {name: 'Task3',link:'gogle.come'}
]
for(let value of array){
    createCard(value.name);
}


