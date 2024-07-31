let btn =document.querySelectorAll('button');
function removeTable(event){
    console.log(event.target.closest('tr').remove())
}
for(let value of btn){
    value.addEventListener('click',removeTable)
}




















 

