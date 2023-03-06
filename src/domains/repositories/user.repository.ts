import { UserM } from '../model/user';

export interface UserRepository {
  getAllUsers(): Promise<UserM[]>;
}
