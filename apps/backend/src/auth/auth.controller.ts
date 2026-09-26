import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { ZodValidationPipe } from '../utils/zod-validation-pipe.js';
import {
  emailCredentialsSchema,
  type EmailCredentialsDto,
} from '@todos/shared';

@Controller('auth')
export class AuthController {
  @Post()
  @UsePipes(new ZodValidationPipe(emailCredentialsSchema))
  credential(@Body() credentials: EmailCredentialsDto) {}
}
