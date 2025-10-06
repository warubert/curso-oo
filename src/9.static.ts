class User {
  constructor(public name: string) {}

  static count = 0;

  static addCount() {
    User.count++;
  }
}

const user = new User("John");
console.log(User.count);
User.addCount();
console.log(User.count);
