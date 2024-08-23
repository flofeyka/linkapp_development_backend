import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApplicationDto } from './dtos/ApplicationDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/send')
  async SendEmail(@Body() ApplicationForm: ApplicationDto) {
    return this.appService.SendEmail(ApplicationForm);
  }
}
