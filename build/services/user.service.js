"use strict";
// import { IUser, UserCreationParams } from "../database/models/user.model";
// import  {UserRepository} from "../database/repositories/user.repositories";
// export class UserService {
//   private userRepository: UserRepository;
//   constructor() {
//     this.userRepository = new UserRepository();
//   }
//   // public async getAllUsers(page: number = 1, limit: number = 10, nameFilter?: string): Promise<{ users: IUser[], total: number }> {
//   //   try {
//   //     const { users, total } = await this.userRepository.getAllUsers(page, limit, nameFilter);
//   //     return { users, total };
//   //   } catch (error) {
//   //     console.error("Error fetching users:", error);
//   //     return { users: [], total: 0 };
//   //   }
//   // }
//   public async getUserById(id: string): Promise<IUser | null> {
//     return this.userRepository.getUserById(id);
//   } 
//   public async createUser(params: UserCreationParams): Promise<IUser> {
//     return this.userRepository.createUser(params);
//   }
//   public async updateUser(id: string, params: Partial<IUser>): Promise<IUser | null> {
//     return this.userRepository.updateUser(id, params);
//   }
//   public async deleteUser(id: string): Promise<IUser | null> {
//     return this.userRepository.deleteUser(id);
//   }
//   public async getUser ():Promise<IUser[]>{
//     return this.userRepository.getUser();
//   }
// }
//# sourceMappingURL=user.service.js.map