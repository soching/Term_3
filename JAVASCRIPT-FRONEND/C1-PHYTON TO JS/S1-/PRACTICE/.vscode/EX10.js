student={name:'ronan',age:17}
function listStudent(arr){
    return 'student' + arr.name + 'is' +arr['age']+'years los';

}
console.log(listStudent(student));