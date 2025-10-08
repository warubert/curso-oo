import { User } from "../../domain/entity/User";
import { IUserRepository } from "../../domain/repository/IUserRepository";
import { CreateUserDTO } from "../dtos/CreateUserDTO";
export declare class CreateUserUseCase {
    private repository;
    constructor(repository: IUserRepository);
    execute(dto: CreateUserDTO): Promise<User>;
}
//# sourceMappingURL=CreateUserUseCase.d.ts.map