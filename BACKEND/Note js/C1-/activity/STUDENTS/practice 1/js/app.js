// Start this project 
// and have a look in the 'Console' and the 'Network' tab in chrome
const studentsContainer = document.getElementById("studentsContainer");

function afterStudentRequest(response) {
  // TODO: Display the list of students in the DOM
  let table =document.createElement('table');
  let thead =document.createElement('thead');
  let th1 = document.createElement('th');
  th1.textContent='Name';
  let th2 = document.createElement('th');
  th2.textContent='Nackname';
  let th3 = document.createElement('th');
  th3.textContent='Class';
  let tbody =document.createElement('tbody');
  thead.appendChild(th1);
  thead.appendChild(th2);
  thead.appendChild(th3);
  table.appendChild(thead);


  for(let values of response.data){
    let tr =document.createElement('tr');
    let td1=document.createElement('td');
    td1.textContent=values.name;
    let td2=document.createElement('td');
    td2.textContent=values.nickname;
    let td3 =document.createElement('td')
    td3.textContent=values.class
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tbody.appendChild(tr);

  }
  table.appendChild(tbody);
  document.body.appendChild(table);
  console.log(document.body.appendChild(table))
}

// The URL of the data we want to get
const STUDENT_URL = "data/students.json";

// We use Axios library to do a HTTP request to the server
// Request a GET on STUDENT_URL to get the data from the JSON
// Once done the function 'afterStudentRequest' will be called
axios.get(STUDENT_URL).then(afterStudentRequest);
