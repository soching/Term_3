//get data from 
let URL = "http://localhost:2000";
function displayStudent(){
    axios.get(URL + "/student").then((res)=>{
    let datas =res.data.data;
    let ul =document.getElementById("student_list");
    console.log(datas)
    for(let value of datas){
      let li1 =document.createElement('li');
      li1.textContent= value.name;
      ul.appendChild(li1);
      let btn =document.createElement('button');
      btn.textContent='button';
      ul.appendChild(btn);
    }
  })
}

function addNewStudent(){
    let studentName = document.querySelector("#student").value;
    console.log(studentName);
    let student = {"name":studentName};
    axios.post(URL+"/student/create",student).then((res)=>{
        if(res.data.status==200){
            displayStudent();
        }
    })
}
let btn = document.querySelector('#btn');
btn.addEventListener('click' , addNewStudent);
displayStudent();