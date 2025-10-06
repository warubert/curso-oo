class User {
  constructor(
    private name: string,
    private age: number,
    private address: Address[]
  ) {}

  showAddress(): void {
    this.address.forEach((address) => {
      console.log(address);
    });
  }
}

class Address {
  constructor(public street: string, private number: number) {}
}

const user = new User("John", 25, [new Address("Street 1", 123)]);
console.log(user);
user.showAddress();
