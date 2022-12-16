import { Module } from '@nestjs/common';
import { QueueController } from './queue.controller';
import { QueueService } from './queue.service';
import { SocketGateway } from '../socket/socket.gateway';

@Module({
  controllers: [QueueController],
  providers: [QueueService, SocketGateway],
})
export class QueueModule {}
