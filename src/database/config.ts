import { registerAs } from '@nestjs/config';

export default registerAs('db', () => ({
  type: 'mysql',
  environment: process.env.NODE_ENV || 'development',
  host: process.env.DATABASE_HOST || 'localhost',
  port: +process.env.DATABASE_PORT || 3306,
  username: process.env.DATABASE_USERNAME || 'root',
  password: process.env.DATABASE_PASSWORD || 'password',
  database: process.env.DATABASE_NAME || 'sportify',
  synchronize: process.env.DATABASE_SYNCHRONIZE || true
}));
