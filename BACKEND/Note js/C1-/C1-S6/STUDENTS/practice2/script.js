// TODO
// Get URL https://reqres.in/api/users?page=2

let btn =document.querySelector('button');
btn.addEventListener('click',afterSuccess);

function afterSuccess(respon){
    for(let values of respon.data.data){
        let ul =document.createElement('ul');
        let li1 =document.createElement('li');
        li1.textContent=values.email;
        let li2 =document.createElement('li');
        li2.textContent=values.first_name;
        ul.appendChild(li1);
        ul.appendChild(li2);
        document.body.appendChild(ul)
    }
    
   
}



let request = "https://reqres.in/api/users?page=2";
axios.get(request).then(afterSuccess);