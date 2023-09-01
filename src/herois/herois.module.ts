import { Module } from '@nestjs/common';
import { HeroisService } from './herois.service';
import { HeroisController } from './herois.controller';
import PrismaService from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [HeroisController],
  providers: [HeroisService],
  imports: [PrismaModule]
})
export class HeroisModule {}
