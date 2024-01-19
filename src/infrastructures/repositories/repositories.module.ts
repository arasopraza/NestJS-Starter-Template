import { Module } from '@nestjs/common';
import { UserRepositoryOrm } from './user.repository';
import { PrismaModule } from '../config/database/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [UserRepositoryOrm],
  exports: [UserRepositoryOrm],
})
export class RepositoriesModule {}
