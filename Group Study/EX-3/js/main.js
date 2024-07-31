let btn =document.querySelectorAll('.delete');
for(let value of btn){
    value.addEventListener('click',function(){
        value.parentElement.remove();
})
}