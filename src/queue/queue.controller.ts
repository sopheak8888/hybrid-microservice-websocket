import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { QueueService } from './queue.service';
import { Socket } from 'socket.io';
import { QueueDto } from './dto/queue.dto';

@Controller('queue')
export class QueueController {
  constructor(private readonly queueService: QueueService) {}
  @EventPattern('send-message')
  async sendMessage(data: QueueDto, client: Socket) {
    return await this.queueService.sendMessage(data, client);
  }
}
