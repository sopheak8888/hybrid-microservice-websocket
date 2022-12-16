import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
export class QueueDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  sender: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  room: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1000)
  message: string;
}
