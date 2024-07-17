import { Controller, Route, Post, Get, Body, Path, Put, Delete,  } from 'tsoa';
import  {UserService}  from '../services/users.service';
import { IUser, UserCreationParams } from '../database/models/user.model';

@Route("/v1/users")
export class UserController extends Controller {
  private userService: UserService = new UserService();


  // @Get('/')
  // public async getAllUsers(
  //   @Query('page') page: number = 1,
  //   @Query('limit') limit: number = 2,
  //   @Query('name') nameFilter?: string,
  // ): Promise<{ users: IUser[], total: number }> {
  //   try {
  //     const { users, total } = await this.userService.getAllUsers(page, limit, nameFilter);
  //     return { users, total };
  //   } catch (error) {
  //     console.error('Error fetching users:', error);
  //     return { users: [], total: 0 };
  //   }
  // }

  @Get("{id}")
  public async getUserById(@Path() id: string): Promise<IUser | null> {
    return this.userService.getUserById(id);
  }


  @Post("/")
  public async createNewUser(@Body() requestBody: UserCreationParams): Promise<IUser> {
    return this.userService.createUser(requestBody);
  }

  @Put("{id}")
  public async updateUser(@Path() id:string, @Body() body: Partial<IUser>): Promise<IUser | null> {
    return this.userService.updateUser(id, body);
  }

  @Delete("{id}")
  public async deleteUser(@Path() id: string): Promise<IUser | null> {
    return this.userService.deleteUser(id);
  }
  @Get("/")
  public async getUser(): Promise<IUser[]>{
    return this.userService.getUsers();
  }
}
