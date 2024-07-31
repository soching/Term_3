
let url = "http://localhost:8000";
function displayStudent(){
    axios.get(url + "/student").then((res)=>{
        console.log(res.data)
    })
}
displayStudent();

