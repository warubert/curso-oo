import { User } from "../../domain/entity/User";
import { IUserRepository } from "../../domain/repository/IUserRepository";
export declare class FindUserByIdUseCase {
    private userRepository;
    constructor(userRepository: IUserRepository);
    execute(id: string): Promise<User | null>;
}
//# sourceMappingURL=FindUserByIdUseCase.d.ts.map