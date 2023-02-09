import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { Storage } from '../../utils/storage-manager'
import { accessTokenKey } from './consts'
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

type TErrorHandlerArguments = {
  error: Omit<AxiosError, TExcludedFields>
}
interface IErrorHandler {
  (args: TErrorHandlerArguments): void
}
export abstract class HttpClient {
  protected readonly instance: AxiosInstance
  protected static errorHandlerCallBack: IErrorHandler

  public constructor(baseURL: string, errorHandler: IErrorHandler) {
    this.instance = axios.create({
      baseURL
    })

    HttpClient.errorHandlerCallBack = errorHandler || noop

    this.initializeResponseInterceptor()
  }

  private initializeResponseInterceptor(): void {
    this.instance.interceptors.response.use(this.handleResponse, this.handleError)

    this.instance.interceptors.request.use(this.handleRequest)
  }

  private async handleRequest(config: AxiosRequestConfig) {
    const requestConfig = { ...config }
    requestConfig.headers = config.headers ?? {}

    const token = await Storage.getItem(accessTokenKey)

    if (token) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      requestConfig.headers = {
        ...requestConfig.headers,
        Authorization: `Bearer ${token}`
      }
    }

    return requestConfig
  }

  private handleResponse({ data }: AxiosResponse<any, any>): AxiosResponse {
    //todo call general <success> response handler;
    return data
  }

  protected handleError(error: AxiosError): void {
    HttpClient.errorHandlerCallBack?.({ error: { response: error.response } })

    Promise.reject(error)
  }
}
