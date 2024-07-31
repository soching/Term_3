let body =document.querySelector('body');
let tas =document.querySelector('#tasks')
let tag =document.querySelector('.tag');
let btn =document.querySelector('.btn');

let tasks=[
    {describtion:'task1',provoty:1},
    {describtion:'task2',provoty:0},
    {describtion:'task3',provoty:1},
    {describtion:'task4',provoty:3},
    {describtion:'task5',provoty:1},
    {describtion:'task6',provoty:0}
]

function createTask(){


for (let value of tasks){
    let task=document.createElement('div') 
    task.className='kk' 
    task.textContent=value.describtion;
    if(value.provoty===1){
        task.style.background='red';
    }
    else{
        task.style.background='teal';
    }
    body.appendChild(task);
}
}
createTask();



function takeTask(){
    let tasks =document.
}