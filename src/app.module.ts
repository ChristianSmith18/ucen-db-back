import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

// Mongodb
import { MongooseModule } from '@nestjs/mongoose';

// Env var
import { config } from 'dotenv';
import { UserModule } from './user/user.module';

config();
console.log(process.env.DB_URI);

@Module({
  imports: [MongooseModule.forRoot(process.env.DB_URI), UserModule],
  controllers: [AppController],
})
export class AppModule {}
