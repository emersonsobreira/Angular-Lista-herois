import { ApiProperty } from "@nestjs/swagger";

export class CreateHeroisDto {
    @ApiProperty()
    name: string;
}
