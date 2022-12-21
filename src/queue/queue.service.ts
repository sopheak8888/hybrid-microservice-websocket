import { Injectable } from '@nestjs/common';
import { QueueDto } from './dto/queue.dto';
import { WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { SathapanaQmsGateway } from 'src/socket/sathapana-qms.gateway';

@Injectable()
export class QueueService {
  constructor(private readonly socketGateway: SathapanaQmsGateway) {}
  @WebSocketServer() wss: Server;

  async sendMessage(data: QueueDto) {
    return this.socketGateway.handleMessage(data);
  }
}
