export interface IHttpClientRequestParameters {
  endpoint: string
  payload: unknown
}

export interface IHttpClient {
  get<T>(parameters: IHttpClientRequestParameters): Promise<T>
  post<T>(parameters: IHttpClientRequestParameters): Promise<T>

  //todo stex petqa declare anel put, delet patch,  ...

  // generic sarqenq vor use anoxy model nkaragri
}
