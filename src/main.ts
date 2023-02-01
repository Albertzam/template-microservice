import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Transport } from '@nestjs/microservices'
import { Logger } from '@nestjs/common'

const logger = new Logger('UserMicroservice')
async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.NATS,
    options: {
      servers: [process.env.NATS_URL],
      queue: 'user.microservice.queue',
    },
  })

  await app
    .listen()
    .then(() => logger.log('listening microservice user'))
    .catch((e) => logger.error(e))
}
bootstrap()
