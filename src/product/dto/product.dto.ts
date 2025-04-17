import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  name: string;

  @IsNumber()
  price: number;

  @IsOptional()
  description?: string;

  @IsNumber()
  stock: number;

  @IsNumber()
  category_id: number;
}