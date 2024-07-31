class Contract {}
 abstract class Employee {
  constructor(private name:string){}
  getSalary():number{
    return 0;
  }
}

class Developer extends Employee{
  private skills:string[]=[];
  constructor(name:string, private employeeType: string){
    super(name);
  }
  getSalary(): number {
    let salary = this.skills.length * 500;
    if(this.skills.includes('OOP')){
      salary+=200;
    }
    return salary;
  }
}

class Manger extends Employee{
  private teamMembers:Employee[]=[];
  constructor(name:string, private employeeType: string){
    super(name);
  }
  addTeameber(employee:Employee):void{
    this.teamMembers.push(employee);
  }
}


