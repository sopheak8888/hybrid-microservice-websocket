import { Module } from '@nestjs/common';
import { AppGateway } from './app/app.gateway';
import { SocketGateway } from './socket/socket.gateway';
import { QueueModule } from './queue/queue.module';

@Module({
  imports: [QueueModule],
  providers: [AppGateway, SocketGateway],
})
export class AppModule {}
