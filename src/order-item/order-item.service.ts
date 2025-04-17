import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderItemDto } from './dto/order-item.dto';

@Injectable()
export class OrderItemService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateOrderItemDto) {
    return this.prisma.orderItem.create({ data });
  }

  findAll() {
    return this.prisma.orderItem.findMany({
      include: {
        product: true,
        order: true,
      },
    });
  }
}
