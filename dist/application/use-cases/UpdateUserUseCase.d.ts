import { IUserRepository } from "../../domain/repository/IUserRepository";
import { EditUserDTO } from "../dtos/EditUserDTO";
export declare class UpdateUserUseCase {
    private userRepository;
    constructor(userRepository: IUserRepository);
    execute(dto: EditUserDTO): Promise<boolean>;
}
//# sourceMappingURL=UpdateUserUseCase.d.ts.map