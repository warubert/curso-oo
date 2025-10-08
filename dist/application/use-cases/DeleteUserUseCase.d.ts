import { IUserRepository } from "../../domain/repository/IUserRepository";
export declare class DeleteUserUseCase {
    private userRepository;
    constructor(userRepository: IUserRepository);
    execute(id: string): Promise<boolean>;
}
//# sourceMappingURL=DeleteUserUseCase.d.ts.map