import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
//centralizador de uma mesma funcionalidade/recurso

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
