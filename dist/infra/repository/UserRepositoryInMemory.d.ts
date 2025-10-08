import { User } from "../../domain/entity/User";
import { IUserRepository } from "../../domain/repository/IUserRepository";
export declare class UserRepositoryInMemory implements IUserRepository {
    private users;
    create(user: User): Promise<User>;
    findById(id: string): Promise<User | null>;
    findAll(): Promise<User[]>;
    update(user: User): Promise<boolean>;
    delete(id: string): Promise<boolean>;
}
//# sourceMappingURL=UserRepositoryInMemory.d.ts.map