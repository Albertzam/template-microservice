import { Controller, Get, Res } from '@nestjs/common'
import {
  Ctx,
  MessagePattern,
  NatsContext,
  Payload,
} from '@nestjs/microservices'
import { AppService } from './app.service'
import { UserErrorCodes } from './libs/common/constants/errorsCode'
import { MicroserviceError } from './libs/errors/error'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('user.microservice.login')
  async timeout(): Promise<string> {
    return new Promise((resolve) => setTimeout(resolve, 3000))
  }

  @MessagePattern('user.microservice.refresh')
  async rpcError(): Promise<string> {
    throw new MicroserviceError('User not found', UserErrorCodes.USER_NOT_FOUND)
  }
}
