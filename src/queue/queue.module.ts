import { Module } from '@nestjs/common';
import { QueueController } from './queue.controller';
import { QueueService } from './queue.service';
import { SathapanaQmsGateway } from '../socket/sathapana-qms.gateway';

@Module({
  controllers: [QueueController],
  providers: [QueueService, SathapanaQmsGateway],
})
export class QueueModule {}
