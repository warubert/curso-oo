import { User } from "../../domain/entity/User";
import { IUserRepository } from "../../domain/repository/IUserRepository";
import { EditUserDTO } from "../dtos/EditUserDTO";

export class UpdateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(dto: EditUserDTO): Promise<boolean> {
    const userRepository = await this.userRepository.findById(dto.id);

    if (!userRepository) {
      throw new Error("User not found");
    }

    const user = new User(dto.id, dto.name, dto.email, userRepository.password);
    return this.userRepository.update(user);
  }
}
