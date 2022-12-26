// const axios , { AxiosInstance, AxiosRequestConfig, AxiosResponse } = require("axios")

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { Storage } from '../../utils/storage-manager'
import { accessTokenKey } from './consts'

declare module 'axios' {
  // type AxiosResponse<T = unknown> = Promise<T>
}

export abstract class HttpClient {
  protected readonly instance: AxiosInstance

  public constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL
    })

    this.initializeResponseInterceptor()
  }

  private initializeResponseInterceptor(): void {
    this.instance.interceptors.response.use(this.handleResponse, this.handleError)

    this.instance.interceptors.request.use(this.handleRequest)
  }

  private async handleRequest(config: AxiosRequestConfig) {
    config.headers = config.headers ?? {}

    const token = await Storage.getItem(accessTokenKey)

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
  }

  private handleResponse({ data }: AxiosResponse) {
    return data
  }

  protected handleError(error: string): void {
    Promise.reject(error)
  }
}
