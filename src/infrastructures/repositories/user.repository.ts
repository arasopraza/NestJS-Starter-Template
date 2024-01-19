import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/domains/repositories/user.repository';
import { PrismaService } from '../config/database/prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UserRepositoryOrm implements UserRepository {
  constructor(private readonly userRepository: PrismaService) {}

  async getAllUsers(): Promise<User[]> {
    const users = await this.userRepository.user.findMany();
    return users;
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    const user = await this.userRepository.user.create({ data });
    return user;
  }
}
