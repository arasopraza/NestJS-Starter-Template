import { UserM } from 'src/domains/model/user';
import { UserRepository } from 'src/domains/repositories/user.repository';
import { CreateUserDto } from 'src/presentations/user/dto/create-user.dto';

export class CreateUserUseCases {
  constructor(private usersRepository: UserRepository) {}

  async execute(createUserDto: CreateUserDto): Promise<UserM> {
    return this.usersRepository.createUser(createUserDto);
  }
}
