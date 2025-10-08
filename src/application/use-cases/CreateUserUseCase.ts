import { User } from "../../domain/entity/User";
import { IUserRepository } from "../../domain/repository/IUserRepository";
import { CreateUserDTO } from "../dtos/CreateUserDTO";

export class CreateUserUseCase {
  constructor(private repository: IUserRepository) {}
  async execute(dto: CreateUserDTO) {
    const user = new User(dto.id, dto.name, dto.email, dto.password);

    await this.repository.create(user);
    return user;
  }
}
