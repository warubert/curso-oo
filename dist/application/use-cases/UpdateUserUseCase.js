"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserUseCase = void 0;
const User_1 = require("../../domain/entity/User");
class UpdateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(dto) {
        const userRepository = await this.userRepository.findById(dto.id);
        if (!userRepository) {
            throw new Error("User not found");
        }
        const user = new User_1.User(dto.id, dto.name, dto.email, userRepository.password);
        return this.userRepository.update(user);
    }
}
exports.UpdateUserUseCase = UpdateUserUseCase;
