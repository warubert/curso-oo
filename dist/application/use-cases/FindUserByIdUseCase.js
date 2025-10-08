"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUserByIdUseCase = void 0;
class FindUserByIdUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(id) {
        const user = await this.userRepository.findById(id);
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    }
}
exports.FindUserByIdUseCase = FindUserByIdUseCase;
