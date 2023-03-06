import { UserM } from 'src/domains/model/user';
import { UserRepositoryOrm } from 'src/infrastructures/repositories/user.repository';
import { CreateUserDto } from 'src/presentations/user/dto/create-user.dto';

export class CreateUserUseCases {
  constructor(private usersRepository: UserRepositoryOrm) {}

  async execute(createUserDto: CreateUserDto): Promise<UserM> {
    return this.usersRepository.createUser(createUserDto);
  }
}
