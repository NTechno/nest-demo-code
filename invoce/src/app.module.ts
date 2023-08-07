import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';
import { User } from './user/entities/user.entity';
import { Book } from './book/entities/book.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'nest_invoice',
    entities: [User , Book],
    synchronize: true,
  }),UserModule, BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSorce : DataSource){ console.log("App Initialise!!")}
}

// GRANT ALL PRIVILEGES on *.* to 'root@localhost' IDENTIFIED BY 'password';
// FLUSH PRIVILEGES;