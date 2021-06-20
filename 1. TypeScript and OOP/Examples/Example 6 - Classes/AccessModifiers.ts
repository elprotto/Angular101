// public. All the public members can be accessed anywhere without any restrictions.
// private. Ensures that class members are visible only to that class and are not accessible outside the containing class.
// protected. The protected access modifier is similar to the private access modifier, except that protected members can be accessed using their deriving classes.

class Employee1 {
  public empCode: string;
  empName: string;
}

let emp = new Employee1();
emp.empCode = 123;
emp.empName = "Swati";

class Employee2 {
  private empCode: number;
  empName: string;
}

let emp = new Employee2();
emp.empCode = 123; // Compiler Error
emp.empName = "Swati"; //OK

class Employee3 {
  public empName: string;
  protected empCode: number;

  constructor(name: string, code: number) {
    this.empName = name;
    this.empCode = code;
  }
}

class SalesEmployee extends Employee3 {
  private department: string;

  constructor(name: string, code: number, department: string) {
    super(name, code);
    this.department = department;
  }
}

let emp = new SalesEmployee("John Smith", 123, "Sales");
empObj.empCode; //Compiler Error
