export class User {
  private _id: string;
  private _name: string;
  private _email: string;
  private _password: string;
  constructor(
    id: string | null,
    name: string,
    email: string,
    password: string
  ) {
    this._id = id ? id : this.generateId();
    this._name = name;
    this._email = email;
    this._password = password;

    this.validate();
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 9);
  }
  private validate(): void {
    if (!this._name) {
      throw new Error("Name is required");
    }
    if (!this._email) {
      throw new Error("Email is required");
    }
    if (!this._password) {
      throw new Error("Password is required");
    }
  }
}
