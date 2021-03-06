import service from './service'
import store from '../store'
import {setToken} from "../utils/cookie";
const isClient = typeof window !== 'undefined'

export default function request (params, options) {
  if(!options) options = {}
  return {
    get: async (url, body) => {
      try {
        const {data}  = await service(params, options).get(url, body)
        return data
      } catch (e){
        return Promise.reject(e.response)
      }
    },
    post: async (url, body, config) => {
      try {
        const {data} = await service(params, options).post(url, body, config)
        return data
      } catch (e){
        return Promise.reject(e.response.data.message ? e.response.data.message : e.response.data)
      }
    },
    patch: async (url, body) => {
      try {
        const {data} = await service(params, options).patch(url, body)
        return data
      } catch (e){
        return Promise.reject(e.response)
      }
    },
    delete: async (url, body) => {
      try {
        const {data} = await service(params, options).delete(url, body)
        return data
      } catch (e){
        return Promise.reject(e.response)
      }
    }
  }
}
