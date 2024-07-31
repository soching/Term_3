const URL = "http://localhost:3000";
function deleteStudent(e) {
    let id = e.target.id;
    axios.delete(URL + "/student/delete/" + id).then((res) => {
        if (res.status == 200) {
            location.reload();
            displayStudent();
        }
    }).catch((error) => {
        console.error("Error deleting student:", error);
    });
}

function displayStudent() {
    axios.get(URL + "/students").then((res) => {

        let name = document.querySelector('#student-list');
        let id=0
        for (value of res.data.data) {
            let ul = document.createElement('ul');
            let li = document.createElement('li');
            li.textContent = value.name;

            let btnDalete=document.createElement("button");
            btnDalete.textContent="dalete"
            btnDalete.id=id;
            btnDalete.addEventListener("click",deleteStudent);
            li.appendChild(btnDalete);


            ul.appendChild(li);
            name.appendChild(ul);
            id++;
        }
    });

};

function addNewstudent() {
    studentName = document.querySelector('#student').value;
    let student = { "name": studentName };
    axios.post(URL + "/student/create", student).then((res) => {
        if (res.data.status == 200) {
            displayStudent();
        }
    });
}
let btn = document.querySelector('#add');
btn.addEventListener('click', addNewstudent);
// let btnDalete=document.querySelector("");

// let btnDalete
displayStudent();