import { HttpStatus } from '@nestjs/common'

export enum MicroserviceErrorCodes {
  UNKNOWN = 'UNKNOWN',
  UNKNOWN_DESERIALIZATION = 'UNKNOWN_DESERIALIZATION',
  REQUEST_TIMEOUT = 'REQUEST_TIMEOUT',
}

export enum UserErrorCodes {
  USER_NOT_FOUND = 'USER_NOT_FOUND',
}

export const UserErrorHttpStatus: { [x: string]: HttpStatus } = {
  [UserErrorCodes.USER_NOT_FOUND]: HttpStatus.NOT_FOUND,
}
