// TODO 
let deletList = document.querySelectorAll('.delete');
for(let btn of deletList){
    btn.addEventListener('click',(event)=>{
        event.target.closest('li').remove();
    });
}