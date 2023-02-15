import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  AxiosHeaders
} from 'axios'

import { noop } from '../../utils/index'

declare module 'axios' {}

type TExcludedFields =
  | 'request'
  | 'name'
  | 'message'
  | 'config'
  | 'code'
  | 'stack'
  | 'isAxiosError'
  | 'toJSON'

type TErrorHandlerArguments = Omit<AxiosError, TExcludedFields>

interface IErrorHandler {
  (args: TErrorHandlerArguments): void
}
export abstract class HttpClient {
  protected readonly instance: AxiosInstance
  protected errorHandlerCallBack: IErrorHandler
  private ACCESS_TOKEN_KEY: string | undefined

  public constructor(baseURL: string, accessTokenKey?: string, errorHandler?: IErrorHandler) {
    this.instance = axios.create({
      baseURL
    })

    this.ACCESS_TOKEN_KEY = accessTokenKey

    this.errorHandlerCallBack = errorHandler || noop

    this.initializeResponseInterceptor()
  }

  private initializeResponseInterceptor(): void {
    this.instance.interceptors.response.use(this.handleResponse, this.handleError.bind(this))

    this.instance.interceptors.request.use(this.handleRequest.bind(this))
  }

  private async handleRequest(config: AxiosRequestConfig) {
    const requestConfig = { ...config, headers: config.headers ?? {} }

    const token = localStorage.getItem(this.ACCESS_TOKEN_KEY as string)

    if (token) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ;(requestConfig.headers as AxiosHeaders).set('Authorization', `Bearer ${token}`)
    }

    return requestConfig
  }

  private handleResponse(response: AxiosResponse<any, any>): AxiosResponse {
    return response
  }

  protected handleError(error: AxiosError): any {
    this.errorHandlerCallBack?.({ response: error.response })

    return Promise.reject(error)
  }
}
