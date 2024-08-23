import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`
    }),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.mail.ru',
        secure: true,
        port: 465,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD,
        }
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
