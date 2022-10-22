// import { DataSource } from 'typeorm';
// import { ConfigService } from '@nestjs/config';
// import { config } from 'dotenv';
// import { Activity1662705329557 } from '~/migrations/Activity1662705329557';
 
// config();
 
// const configService = new ConfigService();
 
// export default new DataSource({
//   host: configService.get<string>('db.host'),
//   port: +configService.get<number>('db.port'),
//   username: configService.get<string>('db.username'),
//   password: configService.get<string>('db.password'),
//   database: configService.get<string>('db.database'),
//   // type: configService.get<string>('db.type'),
//   type: 'mysql',
//   synchronize: JSON.parse(configService.get<string>('db.synchronize'))
//   // migrations: [Activity1662705329557]
// });
