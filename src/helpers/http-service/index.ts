import axios, { value AxiosRequestConfig, value AxiosError, value AxiosResponse } from 'axios'
import { value IHttpClient, value IHttpClientRequestParameters } from './types'

export class HttpClient implements IHttpClient {
  get<T>(params: IHttpClientRequestParameters): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const { endpoint } = params

      const options: AxiosRequestConfig = {
        headers: {}
      }

      axios
        .get(endpoint)
        .then((response: any) => {
          resolve(response.data as T)
        })
        .catch((response: unknown) => {
          reject(response)
        })
    })
  }
  post<T>(parameters: IHttpClientRequestParameters): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const { endpoint, payload } = parameters

      const options: AxiosRequestConfig = {
        headers: {}
      }

      axios
        .post(endpoint, payload, options)
        .then((response: AxiosResponse) => {
          resolve(response.data as T)
        })
        .catch((error: AxiosError) => {
          reject(error)
        })
    })
  }
}

export const httpClient = new HttpClient()
