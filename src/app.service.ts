import { MailerService } from '@nestjs-modules/mailer';
import { BadGatewayException, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly mailerService: MailerService) {}

  SendEmail(ApplicationForm) {
    const {email, name, phone, comment, connect} = ApplicationForm;

  
    this.mailerService.sendMail ({
      to: 'danilbashirov0@vk.com',
      from: process.env.EMAIL,
      subject: 'Поздравляем с новым клиентом!',
      text: `\nЗдравствуйте!\n
      Пришла новая заявка от ${name}\n
      
      Его номер телефона: ${phone}\n
      Его адрес электронной почты: ${email}\n
      
      ${comment && `Комментарий к проекту: ${comment}`}\n
      
      Способ связи с клиентом: ${connect}`,
    });
  };
}
