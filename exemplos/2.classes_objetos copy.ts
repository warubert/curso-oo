class User {
  private name: string;
  private age: number; //public, private, protected

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  changeAge(newAge: number): void {
    if (newAge <= 0 || newAge >= 120) throw new Error("Invalid age");
    this.age = newAge;
  }
}

const user = new User("John", 25);
user.changeAge(130);
console.log(user);
