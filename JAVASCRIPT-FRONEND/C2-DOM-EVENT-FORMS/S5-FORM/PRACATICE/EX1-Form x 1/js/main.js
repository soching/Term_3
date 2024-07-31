function AddPerson() {
    // to check gender 
    let sex = gender.checked ? gender.value : 'Female';

    // create table row name tableRow 
    let tableRow = document.createElement('tr');
    tableRow.name = "tableRow";

    // create table data name tdFirstName 
    // add value of firstName as textContent
    let tdFirstName = document.createElement('td');
    tdFirstName.name = "tdFirstName";
    tdFirstName.textContent = firstName.value; 
    

    // create table data name tdLastName
    // add value of lastName as textContent 
    let tdLastName = document.createElement('td');
    tdLastName.name = "tdLastName";
    tdLastName.textContent = lastName.value;

    // create table data name tdEmail
    let tdEmail = document.createElement('td');
    // add value of email as textContent 
    tdEmail.textContent = email.value;

    // create table name tdProvince
    let tdProvince = document.createElement('td');
    // add value of province as textContent
    tdProvince.textContent = province.value;

    // create table data name tdFavourite 
    let tdFavourite = document.createElement('td');
    tdFavourite.name = "tdFavourite";
    tdFavourite.textContent = favourite.value;
    // add value of favourite as textContent
    

    // create table data name tdGender
    let tdGender = document.createElement('td'); 
    tdGender.name = "tdGender"
    tdGender.textContent = sex;
    // add value of sex as textContent
    


    // append tdFirstName, tdLastName, tdEmail, tdProvince, tdGender, tdFavourite to tableRow
    tableRow.appendChild(tdFirstName);
    tableRow.appendChild(tdLastName);
    tableRow.appendChild(tdGender);
    tableRow.appendChild(tdEmail);
    tableRow.appendChild(tdProvince);
    tableRow.appendChild(tdFavourite);
    
    // append tableRow to tbody 
    tbody.appendChild(tableRow);
}

// Main
const firstName = document.querySelector('#first');
const lastName = document.querySelector('#last');
const email = document.querySelector('#email');
const province = document.querySelector('#province');
const favourite = document.querySelector('#favorite');
let gender = document.querySelector('input[name="gender"]');
const submitButton = document.querySelector('#submit');
const tbody = document.querySelector('tbody');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    AddPerson();
});