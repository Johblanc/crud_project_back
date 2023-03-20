import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"
import { IsCurrency, IsInt } from "class-validator"

export class CreateProductDto {

  @ApiProperty()
  @IsString()
  nom : string

  @ApiProperty()
  @IsCurrency()
  prix : number

  @ApiProperty()
  @IsInt()
  quantite : number
}
