import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HeroisService } from './herois.service';
import { CreateHeroisDto } from './dto/create-herois.dto';
import { UpdateHeroisDto } from './dto/update-herois.dto';

@Controller('herois')
export class HeroisController {
  constructor(private readonly heroisService: HeroisService) {}

  @Post()
  create(@Body() createHeroisDto: CreateHeroisDto) {
    return this.heroisService.create(createHeroisDto);
  }

  @Get()
  findAll() {
    return this.heroisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.heroisService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHeroisDto: UpdateHeroisDto) {
    return this.heroisService.update(+id, updateHeroisDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.heroisService.remove(+id);
  }
}
