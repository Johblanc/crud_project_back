import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"
import { IsNumber, Min , IsInt , IsNotEmpty,Length} from "class-validator"


export class CreateProductDto {

  @ApiProperty() 
  @IsString()
  @IsNotEmpty()
  nom : string

  @ApiProperty()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @IsNotEmpty()
  prix : number

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  quantite : number
}
