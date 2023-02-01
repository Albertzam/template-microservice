import { IRpcError } from '@interfaces'
import { Catch, ExceptionFilter } from '@nestjs/common'
import { RpcException } from '@nestjs/microservices'
import { Observable, throwError } from 'rxjs'
import { convertErrorMicroservice } from './convertError'
import { MicroserviceError } from './error'

@Catch(Error, MicroserviceError)
export class SerializerExceptionFilter implements ExceptionFilter {
  catch(error: Error | MicroserviceError): Observable<Error> {
    const errorGeneral = convertErrorMicroservice(error)
    const stack = errorGeneral.error
      ? errorGeneral.error.stack
      : errorGeneral.stack

    return throwError(
      () =>
        new RpcException(
          JSON.stringify({
            name: errorGeneral.name,
            message: errorGeneral.message,
            code: errorGeneral.code,
            stack,
            metadata: errorGeneral.metadata,
          } as IRpcError)
        )
    )
  }
}
