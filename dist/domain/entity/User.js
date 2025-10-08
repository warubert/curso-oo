"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, email, password) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._password = password;
        this.validate();
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get email() {
        return this._email;
    }
    get password() {
        return this._password;
    }
    validate() {
        if (!this._id) {
            throw new Error("Id is required");
        }
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
exports.User = User;
