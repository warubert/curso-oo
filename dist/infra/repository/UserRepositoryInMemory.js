"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositoryInMemory = void 0;
class UserRepositoryInMemory {
    constructor() {
        this.users = [];
    }
    create(user) {
        this.users.push(user);
        return Promise.resolve(user);
    }
    findById(id) {
        const user = this.users.find((user) => user.id === id);
        return Promise.resolve(user || null);
    }
    findAll() {
        return Promise.resolve(this.users);
    }
    update(user) {
        const index = this.users.findIndex((u) => u.id === user.id);
        if (index !== -1) {
            this.users[index] = user;
            return Promise.resolve(true);
        }
        return Promise.resolve(false);
    }
    delete(id) {
        const index = this.users.findIndex((u) => u.id === id);
        if (index !== -1) {
            this.users.splice(index, 1);
            return Promise.resolve(true);
        }
        return Promise.resolve(false);
    }
}
exports.UserRepositoryInMemory = UserRepositoryInMemory;
