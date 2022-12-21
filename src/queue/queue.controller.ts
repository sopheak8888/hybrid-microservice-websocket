import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { QueueService } from './queue.service';
import { QueueDto } from './dto/queue.dto';

@Controller('queue')
export class QueueController {
  constructor(private readonly queueService: QueueService) {}
  @EventPattern('send-message')
  async sendMessage(data: QueueDto) {
    return await this.queueService.sendMessage(data);
  }
}
