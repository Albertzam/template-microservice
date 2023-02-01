import { HttpStatus } from '@nestjs/common'

export type ErrorMetadata = { [x: string]: string }
export type ErrorCodesMap = {
  [x: string]: HttpStatus
}
