class Student {
    name: string;
    listStudent: Address[] = [];
  
    constructor(name: string) {
      this.name = name;
    }
  
    getHistoryStudent(city: string, street: string, country: string) {
      let studentAddress = new Address(city, street, country);
      this.listStudent.push(studentAddress);
    }
  }
  
  class Address {
    city: string;
    street: string;
    country: string;
  
    constructor(city: string, street: string, country: string) {
      this.city = city;
      this.street = street;
      this.country = country;
    }
  }
  
  let studentName = new Student('Sok Seyha');
  studentName.getHistoryStudent("Phnom Penh", "Norodom Blvd", "Cambodia");
  console.log(studentName);