"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const User_1 = require("../../domain/entity/User");
class CreateUserUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(dto) {
        const user = new User_1.User(dto.id, dto.name, dto.email, dto.password);
        await this.repository.create(user);
        return user;
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
