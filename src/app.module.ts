import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { HeroisModule } from './herois/herois.module';

@Module({
  imports: [PrismaModule, HeroisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
