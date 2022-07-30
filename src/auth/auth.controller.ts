import { AuthDto } from './dto';
import { AuthService } from './auth.service';
import {
  Body,
  Controller,
  ParseIntPipe,
  Post,
} from '@nestjs/common';

@Controller('auth')
export class AuthController {
  // nestjs auto instantiate the service
  constructor(private AuthService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.AuthService.signup(dto);
  }

  @Post('signin')
  signin(@Body() dto: AuthDto) {
    return this.AuthService.signin(dto);
  }
}
