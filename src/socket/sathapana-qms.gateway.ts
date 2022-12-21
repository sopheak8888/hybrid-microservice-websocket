import { Server } from 'socket.io';
import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { QueueDto } from '../queue/dto/queue.dto';

@WebSocketGateway({
  namespace: '/sathapana',
  cors: true,
})
export class SathapanaQmsGateway {
  @WebSocketServer() wss: Server;

  handleMessage(data: QueueDto) {
    return this.wss.emit(`${data.room}`, data.sender, data.message);
  }
}
