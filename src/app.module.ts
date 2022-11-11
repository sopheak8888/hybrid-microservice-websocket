import { Module } from '@nestjs/common';
import { AppGateway } from './app/app.gateway';
import { ChatGateway } from './chat/chat.gateway';

@Module({
  imports: [],
  providers: [AppGateway, ChatGateway],
})
export class AppModule {}
