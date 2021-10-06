import { StatusCodes } from 'http-status-codes'
import { HttpHeaders, ErrorResponseBody } from 'types'

export class ErrorResponse {
  headers: HttpHeaders
  body: ErrorResponseBody
  constructor(body: Partial<ErrorResponseBody>) {
    this.headers = {
      'Content-Type': 'application/json',
    }
    this.body = {
      title: body.title || 'Ocorreu um erro',
      detail: body.detail,
      statusCode: body.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    }
  }
}
