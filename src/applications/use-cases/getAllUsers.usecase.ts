import { UserM } from 'src/domains/model/user';
import { UserRepository } from 'src/domains/repositories/user.repository';

export class GetAllUserUseCases {
  constructor(private usersRepository: UserRepository) {}

  async execute(): Promise<UserM[]> {
    return await this.usersRepository.getAllUsers();
  }
}
