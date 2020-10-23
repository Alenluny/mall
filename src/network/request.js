import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000',
    timeout: 5000
  })
  //发送网络请求
  return instance(config)
}

