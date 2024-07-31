
/*
 INSTRUCTIONS
	1 -  Create a type  `Person` with the following properties:
         - name			(string)
         - nationality	(string)
         - salary			(string)

	2 -  For all the functions : add the parameter types and return type

	3 -  Create 2 objects of type personn (like you want) and  test the 3 functions

*/
type Person = {
  name: string;
  nationality: string;
  salary: string;
};

function getName(person:Person) {
  return person.name;
}

function sumSalaries(person1:Person, person2:Person) {
  return person1.salary + person2.salary;
}

function isFrench(person:Person) {
  return person.nationality == "French";
}

const person1: Person = {
  name: "Rath",
  nationality: "American",
  salary: "1000"
};
const person2: Person = {
  name: "Roth",
  nationality: "Cambodia",
  salary: "2000"
};
console.log(getName(person2));



