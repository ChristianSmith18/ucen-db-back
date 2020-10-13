import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigurations } from 'src/configs/orm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfigurations)],
  // controllers: [UserController],
  // providers: [UserService],
})
export class UserModule {}
