class User {
  constructor(public name: string, public age: number, public role: string) {}
}

class Manager extends User {
  constructor(
    name: string,
    age: number,
    role: string,
    public reports: string[]
  ) {
    super(name, age, role);
  }
}
class Admin extends User {}

const manager = new Manager("John", 25, "manager", ["reports"]);
const admin = new Admin("John", 25, "admin");
