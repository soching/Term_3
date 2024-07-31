let container =document.querySelector('.container');
let btn =document.querySelector('button');
let p =document.createElement('p');
let walk =true;
p.textContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, temporibus';

btn.addEventListener('click',function(){
    if(walk){
        container.appendChild(p);
        btn.textContent='see less';
        walk=false;

    }
    else{
        p.remove();
        btn.textContent='show information';
        walk=true;
    }
})
