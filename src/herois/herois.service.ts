import { Injectable } from '@nestjs/common';
import { CreateHeroisDto } from './dto/create-herois.dto';
import { UpdateHeroisDto } from './dto/update-herois.dto';
import PrismaService from 'src/prisma/prisma.service';

@Injectable()
export class HeroisService {

    constructor(private prisma: PrismaService){}
  create(createHeroisDto: CreateHeroisDto) {
    return this.prisma.heroi.create({data: createHeroisDto});
  }

  findAll() {
    return this.prisma.heroi.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} herois`;
  }

  update(id: number, updateHeroisDto: UpdateHeroisDto) {
    return `This action updates a #${id} herois`;
  }

  remove(id: number) {
    return `This action removes a #${id} herois`;
  }
}
