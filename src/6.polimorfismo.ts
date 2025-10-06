class Manager {
  constructor(name: string, age: number) {}

  getReports(): void {
    console.log("Reports");
  }
}

class Admin extends Manager {
  getReportsAdmin(): void {
    console.log("Reports Admin");
  }
}

class Employee {
  getReports(): void {
    console.log("Reports ruim");
  }
}

const manager = new Manager("John", 25);
manager.getReports();
const admin = new Admin("John", 25);
admin.getReports();
admin.getReportsAdmin();
const employee = new Employee();
employee.getReports();
