import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/order.dto';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateOrderDto) {
    return this.prisma.order.create({
      data,
      include: { items: true },
    });
  }

  findAll() {
    return this.prisma.order.findMany({ include: { items: true } });
  }
}
