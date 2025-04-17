import { IsUUID, IsNumber } from 'class-validator';

export class CreateOrderItemDto {
  @IsUUID()
  order_id: string;

  @IsUUID()
  product_id: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  price: number;
}
