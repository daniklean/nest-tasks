import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Get('say-hello2')
  getHello(): string {
    return this.UsersService.getHello();
  }
}
