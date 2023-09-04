import { CreateUserDto } from 'src/presentations/user/dto/create-user.dto';
import { UserM } from '../model/user';

export interface UserRepository {
  createUser(createUserDto: CreateUserDto): Promise<UserM>;
  getAllUsers(): Promise<UserM[]>;
}
