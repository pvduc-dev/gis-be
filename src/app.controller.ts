import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { randomPoint } from '@turf/random';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('vessels')
  getHello(@Query('perPage') perPage: string): any {
    return randomPoint(+perPage);
  }
}
