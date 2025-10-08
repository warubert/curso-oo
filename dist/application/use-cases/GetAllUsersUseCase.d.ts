import { IUserRepository } from "../../domain/repository/IUserRepository";
export declare class GetAllUsersUseCase {
    private userRepository;
    constructor(userRepository: IUserRepository);
    execute(): Promise<import("../../domain/entity/User").User[]>;
}
//# sourceMappingURL=GetAllUsersUseCase.d.ts.map