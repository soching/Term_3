let array =[
    {firs:'soching',last:'chun',class:'A',email:'soching.chun@pnc.com'},
    {firs:'chaiya',last:'sophorn',class:'A',email:'chhaiya.sophorn@pnc.com'},
    {firs:'radit',last:'thy',class:'A',email:'radit.thy@pnc.com'},
    {firs:'rin',last:'yourn',class:'A',email:'rin.yourn@pnc.com'},
    {firs:'sovannarith',last:'penh',class:'A',email:'sovannarith.penh@pnc.com'},
    {firs:'dany',last:'nay',class:'A',email:'dany.nay@pnc.com'},
    {firs:'cha',last:'em',class:'A',email:'cha.em@pnc.com'},
    {firs:'channy',last:'chhun',class:'A',email:'channy.chhun@pnc.com'},
    {firs:'vanny',last:'chan',class:'A',email:'vanny.chan@pnc.com'},
    {firs:'makara',last:'try',class:'A',email:'makara.@pnctry.com'}
]

let tbody =document.querySelector('#tbody');

function createData(listname){
    let tr =document.createElement('tr');
    let firstname=document.createElement('td');
    let lastename=document.createElement('td');
    let class1=document.createElement('td');
    let emails=document.createElement('td');

    firstname.textContent=listname.firs;
    lastename.textContent=listname.last;
    class1.textContent=listname.class;
    emails.textContent=  listname.email;

    tr.appendChild(firstname);
    tr.appendChild(lastename);
    tr.appendChild(class1);
    tr.appendChild(emails);
    tbody.appendChild(tr)
}


for(let value of array){
    createData(value);
}