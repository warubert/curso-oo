class User {
  constructor(
    private _name: string,
    private age: number,
    private role: string
  ) {}

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }
}

const user = new User("John", 25, "admin");
console.log(user.name);
