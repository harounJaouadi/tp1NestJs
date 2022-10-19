import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoEntity } from './todo/todo.entity';
import { PremierModule } from './premier/premier.module';
import { TodoModule } from './todo/todo.module';


@Module({
  imports: [
    PremierModule,
    TodoModule,
    
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "tp2",
      entities: [TodoEntity],
      synchronize: true,
      // logging : true 
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
