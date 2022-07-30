import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UserController {
    @Get('me')
    getMe() {
        // TODO: add route guards
        return 'user info'
    }
}
