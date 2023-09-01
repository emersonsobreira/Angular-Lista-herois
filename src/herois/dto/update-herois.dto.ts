import { PartialType } from '@nestjs/swagger';
import { CreateHeroisDto } from './create-herois.dto';

export class UpdateHeroisDto extends PartialType(CreateHeroisDto) {}
