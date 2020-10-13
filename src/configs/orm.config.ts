import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// Para configurar las variables de entorno
import { config } from 'dotenv';

config();

export const typeOrmConfigurations: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
