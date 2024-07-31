abstract class Employee {
    protected name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    abstract getSalary(): number;
  }
  
  class Contract {}
  
  class Commercial extends Employee {
    private contracts: Contract[] = [];
  
    constructor(name: string) {
      super(name);
    }
  
    addContract(contract: Contract) {
      this.contracts.push(contract);
    }
  
    getSalary(): number {
      return this.contracts.length * 400;
    }
  }
  
  class Manager extends Employee {
    private teamMembers: Employee[] = [];
  
    constructor(name: string) {
      super(name);
    }
  
    addTeamMember(employee: Employee) {
      this.teamMembers.push(employee);
    }
  
    getSalary(): number {
      return this.teamMembers.length * 600;
    }
  }
  
  class Developer extends Employee {
    private skills: string[] = [];
  
    constructor(name: string) {
      super(name);
    }
  
    addSkill(skill: string) {
      this.skills.push(skill);
    }
  
    getSalary(): number {
      let salary = this.skills.length * 500;
  
      if (this.skills.includes("OOP")) {
        salary += 2000;
      }
  
      return salary;
    }
  }
  
  // Example usage:
  const john = new Commercial("John");
  john.addContract(new Contract());
  john.addContract(new Contract());
  console.log(john.getSalary()); // Output: 800
  
  const mary = new Manager("Mary");
  mary.addTeamMember(new Developer("Alice"));
  mary.addTeamMember(new Developer("Bob"));
  console.log(mary.getSalary()); // Output: 1200
  
  const alice = new Developer("Alice");
  alice.addSkill("JavaScript");
  alice.addSkill("React");
  console.log(alice.getSalary()); // Output: 2500