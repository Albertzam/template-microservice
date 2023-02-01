import { ErrorMetadata } from '@constants'

export interface IRpcError {
  name: string
  message: string
  code: string
  stack: string
  metadata?: ErrorMetadata
}
