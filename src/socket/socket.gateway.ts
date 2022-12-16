import { Socket, Server } from 'socket.io';
import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { QueueDto } from '../queue/dto/queue.dto';

@WebSocketGateway({ namespace: '/sathapana-qms' })
export class SocketGateway {
  @WebSocketServer() wss: Server;

  handleMessage(data: QueueDto, client: Socket) {
    return this.wss.emit(`chatToClient/${data.room}`, data.message);
  }

  // @SubscribeMessage('chatToServer')
  // handleMessage(
  //   client: Socket,
  //   message: { sender: string; room: string; message: string },
  // ) {
  //   return this.wss.emit(`chatToClient/${message.room}`, message);
  // }
}
