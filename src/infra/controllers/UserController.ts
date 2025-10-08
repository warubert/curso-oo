import { CreateUserDTO } from "../../application/dtos/CreateUserDTO";
import { EditUserDTO } from "../../application/dtos/EditUserDTO";
import { CreateUserUseCase } from "../../application/use-cases/CreateUserUseCase";
import { DeleteUserUseCase } from "../../application/use-cases/DeleteUserUseCase";
import { FindUserByIdUseCase } from "../../application/use-cases/FindUserByIdUseCase";
import { GetAllUsersUseCase } from "../../application/use-cases/GetAllUsersUseCase";
import { UpdateUserUseCase } from "../../application/use-cases/UpdateUserUseCase";
import { User } from "../../domain/entity/User";
import { UserRepositoryInMemory } from "../repository/UserRepositoryInMemory";
import { Request, Response } from "express";

export class UserController {
  private repository: UserRepositoryInMemory;
  constructor() {
    this.repository = new UserRepositoryInMemory();
  }
  async getAllUsers(req: Request, res: Response) {
    const useCase = new GetAllUsersUseCase(this.repository);
    const users = await useCase.execute();
    res.json({ data: users });
  }

  async createUser(req: Request, res: Response) {
    const useCase = new CreateUserUseCase(this.repository);
    const dto = new CreateUserDTO(
      req.body.name,
      req.body.email,
      req.body.password
    );
    const users = await useCase.execute(dto);
    res.status(201).json({ data: users });
  }

  async getUserById(req: Request, res: Response) {
    const { id } = req.params;
    const useCase = new FindUserByIdUseCase(this.repository);
    const users = await useCase.execute(id);
    res.json({ data: users });
  }

  async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const useCase = new UpdateUserUseCase(this.repository);
    const dto = new EditUserDTO(id, req.body.name, req.body.email);
    const users = await useCase.execute(dto);
    res.json({ data: users });
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    const useCase = new DeleteUserUseCase(this.repository);
    const users = await useCase.execute(id);
    res.json({ data: users });
  }
}
