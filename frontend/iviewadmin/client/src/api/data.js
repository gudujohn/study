import axios from '@/libs/api.request'

export const errorReq = () => {
  return axios.request({
    url: 'api/getErrorUrl',
    method: 'post'
  })
}

export const saveErrorLogger = info => {
  return axios.request({
    url: 'api/saveErrorLogger',
    data: info,
    method: 'post'
  })
}

export const uploadImg = formData => {
  return axios.request({
    url: 'api/image/upload',
    data: formData
  })
}