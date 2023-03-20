import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("products")
export class Product extends BaseEntity {

  @ApiProperty()
  @PrimaryGeneratedColumn()
  id : number


  @ApiProperty()
  @Column()
  nom : string

  @ApiProperty()
  @Column()
  prix : number

  @ApiProperty()
  @Column()
  quantite : number
}
