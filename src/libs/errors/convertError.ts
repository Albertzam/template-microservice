import { MicroserviceErrorCodes } from '../common/constants/errorsCode'
import { MicroserviceError } from './error'

export const convertErrorMicroservice = (
  error: Error | MicroserviceError
): MicroserviceError => {
  if (!(error instanceof MicroserviceError)) {
    return new MicroserviceError(
      error.message,
      MicroserviceErrorCodes.UNKNOWN,
      undefined,
      error
    )
  }

  return error
}
