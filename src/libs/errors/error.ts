import { ErrorMetadata } from '@constants'

export class MicroserviceError extends Error {
  public code: string
  public metadata?: { [x: string]: string }
  public error?: Error
  constructor(
    message: string,
    code: string,
    metadata?: ErrorMetadata,
    error?: Error
  ) {
    super(message)
    this.code = code
    this.metadata = metadata
    this.error = error
  }
}
