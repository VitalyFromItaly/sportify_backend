import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config();

export default new DataSource({
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  type: 'mysql',
  synchronize: false,
  migrationsTableName: 'migrations',
  entities: [__dirname + '/dist/src/modules/**/entities/*{.js,.ts}'],
  migrations: [__dirname + '/dist/src/migrations/**/*{.js,.ts}']
});
