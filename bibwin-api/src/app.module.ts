import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      // TODO: Use environment variables for these values
      username: 'bibwin_user',
      password: 'bibwin_pass',
      database: 'bibwin_db',
      autoLoadEntities: true,
      synchronize: true, // Note: Set to false in production
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
