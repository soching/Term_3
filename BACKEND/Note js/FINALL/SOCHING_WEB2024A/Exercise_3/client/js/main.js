const url = 'http://localhost:3000';
function getTodo(res) {
   // TODO
   
   
}

// TODO : request axios.get(...)...
let tbody = document.querySelector('tbody');
axios.get('/server/database/todos.json').then(respone=>{
   let list = respone.data;
   let html="";
   for(let valus of list){
      console.log(valus);
      if(valus.isCompleted===true){
         html+=`<tr>
      <td>${valus.id}</td>
      <td>${valus.title}</td>
      <td>${valus.description}</td>
      <td><span class="badge bg-success">DONE</span></td>
      </tr>`
      }else{
         html+=`<tr>
      <td>${valus.id}</td>
      <td>${valus.title}</td>
      <td>${valus.description}</td>
      <td><span class="badge bg-danger">TODO</span></td>
      </tr>`
      }
      tbody.innerHTML=html
   }
})


getTodo();