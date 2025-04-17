import { IsNotEmpty, IsUUID, IsString, IsNumber } from 'class-validator';

export class CreateOrderDto {
  @IsUUID()
  user_id: string;

  @IsString()
  status: string;

  @IsNumber()
  total: number;
}
