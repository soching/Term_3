function afterSuccess(response) {
  // log the data from the 
  console.log(response.data)

  let table =document.createElement('table');
  let thead =document.createElement('thead');
  let th1 =document.createElement('th');
  th1.textContent='ID';
  let th2 =document.createElement('th');
  th2.textContent='Name';
  let th3 = document.createElement('th');
  th3.textContent='UserName';
  let th4 =document.createElement('th');
  th4.textContent='Email';
  let th5 =document.createElement('th');
  th5.textContent='Phone';
  let th6 =document.createElement('th');
  th6.textContent='Website';
  let th7= document.createElement('th');
  th7.textContent='company';
  thead.appendChild(th1);
  thead.appendChild(th2);
  thead.appendChild(th3);
  thead.appendChild(th4);
  thead.appendChild(th5);
  thead.appendChild(th6);
  thead.appendChild(th7);
  table.appendChild(thead);
  let tbody =document.createElement('tbody');

  for(let values of response.data){
    let tr = document.createElement('tr');
    let td1 =document.createElement('td');
    td1.textContent=values.id;
    let td2 =document.createElement('td');
    td2.textContent=values.name;
    let td3 =document.createElement('td');
    td3.textContent=values.username;
    let td4 =document.createElement('td');
    td4.textContent=values.email;
    let td5 =document.createElement('td');
    td5.textContent=values.phone;
    let td6 =document.createElement('td');
    td6.textContent=values.website;
    let td7 =document.createElement('td');
    td7.textContent=values.company.name;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  document.body.appendChild(table);

}

function afterFailed(error) {
  // 2 - TODO log the error message
}

// 1 - TODO change the request to produce an ERROR
let request = "https://jsonplaceholder.typicode.com/users";
axios.get(request).then(afterSuccess).catch(afterFailed);
