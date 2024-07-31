// Define the enumeration
const Students = {
    name1: 'soching',
    name2: 'cheat'
  };
  
  // Define the class
  class ListStudents {
    constructor() {
      this.a = Students.name1;
    }
  }
  
  // Create an instance of the class
  const myList = new ListStudents();
  
  // Access the value of `a`
  console.log(myList.a); // Output: 'soching'