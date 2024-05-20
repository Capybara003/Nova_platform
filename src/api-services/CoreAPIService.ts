/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import applyCaseMiddleware, { ApplyCaseMiddlewareOptions } from 'axios-case-converter'
import { toast } from 'react-toastify'

const options: ApplyCaseMiddlewareOptions = {
  caseMiddleware: {
    requestTransformer: (config: any) => config,
  },
}

const axios = applyCaseMiddleware(
  Axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  }),
  options
)

axios.interceptors.request.use(
  config => {
    const accessToken = typeof window !== 'undefined' ? localStorage.getItem('token') : null
    if (accessToken) {
      config.headers.Authorization = accessToken
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
axios.interceptors.response.use(
  response => response,
  error => {
    handleError(error)
    return Promise.reject(error)
  }
)

const responseData = <T extends AxiosResponse<any>>(response: T) => response.data

const handleError = (error: AxiosError) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

  // if (status == 401 || status == 403) {
  //   window.location.reload()
  // }

  console.error('error', error.message)

  // if (error.response && error.response.status === 500) {
  //   toast.error("Internal Server Error", {
  //     position: toast.POSITION.TOP_RIGHT,
  //   });
  // }
}
const Token = typeof window !== 'undefined' ? localStorage.getItem('token') : null

class CoreAPIService {
  get = async <R>(url: string, params: any = {}) =>
    axios
      .request<R>({
        method: 'get',
        url,
        params,
      })
      .then<R>(responseData)
      .catch(handleError)

  post = async <R>(url: string, data: AnyObject = {}, { ...config }: AxiosRequestConfig = {}) =>
    axios
      .request<R>({
        method: 'post',
        url,
        data,
        headers: {
          'Authorization': Token ? Token : undefined,
          'Content-Type': 'application/json',
        },
        ...config,
      })
      .then<R>(responseData)
      .catch(handleError)
  put = async <R>(url: string, data: AnyObject) =>
    axios
      .request<R>({
        method: 'put',
        url,
        data,
      })
      .then<R>(responseData)
      .catch(handleError)

  patch = async <R>(url: string, data: AnyObject = {}) =>
    axios
      .request<R>({
        method: 'patch',
        url: `${url}`,
        data,
      })
      .then<R>(responseData)
      .catch(handleError)

  delete = async <R>(url: string, data: AnyObject = {}) =>
    axios
      .request<R>({
        method: 'delete',
        url: `${url}`,
        data,
      })
      .then<R>(responseData)
      .catch(handleError)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new CoreAPIService()
