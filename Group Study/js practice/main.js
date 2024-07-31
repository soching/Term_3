let body = document.querySelector('body');
let input =document.createElement('input');
body.appendChild(input);
let table = document.createElement('table');
table.classList.add('table')
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');
let tr = document.createElement('tr')
let thName = document.createElement('th')
let thAge = document.createElement('th')
let thProvince = document.createElement('th')
thName.textContent = 'Name';
thAge.textContent = 'Age';
thProvince.textContent = 'Province';
tr.appendChild(thName);
tr.appendChild(thAge);
tr.appendChild(thProvince);
thead.appendChild(tr);
table.appendChild(thead);
body.appendChild(table)


let arrobj = [
    {name : 'veak', age : 22, province : 'Siem reap'},
    {name : 'Sanok', age : 12, province: 'KPT'},
    {name : 'pheaktra', age : 17, province: 'Batbong'},
    {name : 'Neardy', age : 18, province: 'pp'},
    {name : 'Chin', age : 18, province : 'banana'}
]
function createRow(datas){
    let row =document.createElement('tr');
    let tdname =document.createElement('td');
    tdname.textContent=datas.name;
    let tdage =document.createElement('td');
    tdage.textContent=datas.age;
    let tdprovince =document.createElement('td');
    tdprovince.textContent=datas.province;
    
    row.appendChild(tdname)
    row.appendChild(tdage)
    row.appendChild(tdprovince)
    tbody.appendChild(row)
    table.appendChild(tbody)
    body.appendChild(table)
    
}

for(let arr of arrobj){
    createRow(arr)
}


input.addEventListener('input', searchName);
let nameList = document.querySelector('tbody');
console.log(nameList)
function searchName(event){
    let result = input.value.toLowerCase();
    for (let user of nameList.children){
        if (user.firstElementChild.textContent.toLowerCase().includes(result)){
            user.style.display = '';
        }else {
            user.style.display = 'none'
        }
    }
}