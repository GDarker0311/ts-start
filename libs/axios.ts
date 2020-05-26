import axios from "axios"
import { assign } from "lodash"

interface AxiosInterface {
  baseURL?: string,
  url: string,
  method?: string,
  headers?: object,
  data?: object,
  withCredentials?: boolean,
  params?: object,
  timeout?: number
}

axios.defaults.baseURL = "//" + location.host;
axios.defaults.timeout = 30000;
axios.defaults.method = "POST";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.common["Accept"] = "application/json, text/javascript, */*";

export default async (api: AxiosInterface, params: object): Promise<any> => {
  let options: object = assign({ data: params }, api);
  return await awaitTo(axios(options));
}

function awaitTo<T, U = any>(promise: Promise<T>): Promise<[T | null, U | null]> {
  return promise.then<[T, null]>((data: T) => [data, null]).catch<[null, U]>(err => [null, err]);
}