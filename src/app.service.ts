import { BadRequestException, Injectable } from '@nestjs/common'
import { RpcException } from '@nestjs/microservices'

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    return 'Hello world in microservice'
  }
}
