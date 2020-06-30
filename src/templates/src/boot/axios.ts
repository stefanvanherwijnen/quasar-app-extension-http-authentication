import { boot } from 'quasar/wrappers'
import axios, { AxiosError, AxiosInstance } from 'axios'
import qs from 'qs'

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance;
  }
}

const axiosInstance: AxiosInstance = axios.create({
  paramsSerializer: params => {
    return qs.stringify(params, { arrayFormat: 'repeat' })
  },
  baseURL: '<%= prompts.baseUrl %>'
})

const setErrorInterceptor = (errorFunction: () => void) => {
  axiosInstance.interceptors.response.use((response) => {
    return response
  }, (error: AxiosError) => {
    if (!error.response) {
      errorFunction()
    }
    return Promise.reject(error)
  })
}

const setBaseURL = (baseURL: string) => {
  axiosInstance.defaults.baseURL = baseURL
}

export { axiosInstance, setErrorInterceptor, setBaseURL }
export default boot(({ Vue }) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  Vue.prototype.$axios = axiosInstance
})
