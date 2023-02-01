import { DynamicModule, Module } from '@nestjs/common'
import { SerializerExceptionFilter } from './catchError.filter'

@Module({})
export class ErrorModule {
  static forMicroservice(): DynamicModule {
    return {
      module: ErrorModule,
      providers: [
        {
          provide: 'APP_FILTER',
          useClass: SerializerExceptionFilter,
        },
      ],
    }
  }
}
