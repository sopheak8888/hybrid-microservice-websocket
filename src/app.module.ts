import { Module } from '@nestjs/common';
import { AppGateway } from './app/app.gateway';
import { SathapanaQmsGateway } from './socket/sathapana-qms.gateway';
import { QueueModule } from './queue/queue.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    QueueModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [AppGateway, SathapanaQmsGateway],
})
export class AppModule {}
