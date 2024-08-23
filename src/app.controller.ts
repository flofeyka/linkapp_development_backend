import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/send')
  async SendEmail(@Body() ApplicationForm) {
    return this.appService.SendEmail(ApplicationForm);
  }
}
