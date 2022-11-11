import { Socket, Server } from 'socket.io';
import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

@WebSocketGateway({ namespace: '/chat' })
export class ChatGateway {
  @WebSocketServer() wss: Server;

  @SubscribeMessage('chatToServer')
  handleMessage(
    client: Socket,
    message: { sender: string; room: string; message: string },
  ) {
    this.wss.emit(`chatToClient/${message.room}`, message);
  }
}
