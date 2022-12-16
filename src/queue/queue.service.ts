import { Injectable } from '@nestjs/common';
import { QueueDto } from './dto/queue.dto';
import { WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { SocketGateway } from 'src/socket/socket.gateway';

@Injectable()
export class QueueService {
  constructor(private readonly socketGateway: SocketGateway) {}
  @WebSocketServer() wss: Server;

  async sendMessage(data: QueueDto, client: Socket) {
    return this.socketGateway.handleMessage(data, client);
  }
}
