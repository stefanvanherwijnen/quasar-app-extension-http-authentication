import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

const axiosInstance = axios.create({
  paramsSerializer: params => {
    return qs.stringify(params, { arrayFormat: 'repeat' })
  },
  baseURL: 'http://127.0.0.1:3000'
})

Vue.prototype.$axios = axiosInstance

export { axiosInstance }
