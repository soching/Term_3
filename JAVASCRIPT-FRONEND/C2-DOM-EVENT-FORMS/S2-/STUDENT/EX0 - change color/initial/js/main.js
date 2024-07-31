const btn =document.querySelector('button');
const p =document.querySelector('p');
const div =document.querySelector('div');
let ching=document.querySelector('.ching');

btn.addEventListener('click',()=>{
    document.body.style.background='red';
});

p.addEventListener('click',()=>{
    document.body.style.background='orange';
});

div.addEventListener('click',()=>{
    document.body.style.background='teal';
});
ching.addEventListener('click',()=>{
    document.body.style.background='black';
});
