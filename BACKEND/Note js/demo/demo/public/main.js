//get data from 

axios.get("http://localhost:3000/students").then((res)=>{
  let datas =res.data.data;
  let ul =document.getElementById("student_list");

  for(let value of datas){
    let li1 =document.createElement('li');
    li1.textContent=value.name;
    ul.appendChild(li1);
  }

})
