import { User } from "../../domain/entity/User";
import { IUserRepository } from "../../domain/repository/IUserRepository";

export class UserRepositoryInMemory implements IUserRepository {
  private users: User[] = [];
  create(user: User): Promise<User> {
    this.users.push(user);
    return Promise.resolve(user);
  }
  findById(id: string): Promise<User | null> {
    const user = this.users.find((user) => user.id === id);
    return Promise.resolve(user || null);
  }
  findAll(): Promise<User[]> {
    return Promise.resolve(this.users);
  }
  update(user: User): Promise<boolean> {
    const index = this.users.findIndex((u) => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
      return Promise.resolve(true);
    }
    return Promise.resolve(false);
  }
  delete(id: string): Promise<boolean> {
    const index = this.users.findIndex((u) => u.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
      return Promise.resolve(true);
    }
    return Promise.resolve(false);
  }
}
