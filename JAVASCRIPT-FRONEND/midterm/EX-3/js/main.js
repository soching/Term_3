
const  clearInput = () => {
   //TODO: Clear data from input field
   let tr =document.createElement('tr');
   let firstName=document.createElement('td');
   firstName.textContent=firstName.value;
   tr.appendChild(firstName);
   let lastName=document.createElement('td');
   lastName.textContent=lastName.value;
   tr.appendChild(lastName);
   let province=document.createElement('td');
   province.textContent=province.value;
   tr.appendChild(province);
   let gender=document.createElement('td');
   gender.textContent=genders.value;
   tr.appendChild(gender);
   let skill=document.createElement('td');
   skill.textContent=skills.value;
   tr.appendChild(skill);
   let Comment=document.createElement('td');
   Comment.textContent=comment.value;
   tr.appendChild(Comment);
  
}

const createRow = (event) => {
   // TODO: Create new row with data from input field
   event.addEventListener('click')

}


// Main
const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const province = document.querySelector('#province');
const genders = document.querySelectorAll('input[type="radio"]');
const skills = document.querySelectorAll('.skill');
const comment = document.querySelector('#comment');
const tbody = document.querySelector('tbody');
const btnSubmit = document.querySelector('button');

// TODO: add event listeners to submit button
btnSubmit.addEventListener('click',createRow);