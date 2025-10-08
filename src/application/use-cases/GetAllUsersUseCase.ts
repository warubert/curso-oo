import { IUserRepository } from "../../domain/repository/IUserRepository";

export class GetAllUsersUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute() {
    const users = await this.userRepository.findAll();
    return users;
  }
}
