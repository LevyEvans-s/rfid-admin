import request from '@/utils/request'
import axios from 'axios'

// 获取试块信息清单
export const getStoreList = data => {
  return request({
    url: '/store/list',
    params: data
  })
}

// 删除试块
export const deleteBlock = (id) => {
  return request({
    url: `/store/delete/${id}`,
    method: 'post'
  })
}

export const updateBlock = (id, data) => {
  // return request({
  //   url: '/store/update',
  //   blockId: id,
  //   data,
  //   method: 'POST'
  // })
  return axios({
    url: 'https://mock.mengxuegu.com/mock/62d014bf12622141e6caa20c/rfid-admin-mock/api/store/update',
    blockId: id,
    data,
    method: 'POST'
  })
}

export const allStoreList = () => {
  return request({
    url: '/store/all-list'
  })
}

export const blockDetail = (blockId) => {
  // return request({
  //   url: `/store/detail/${id}`
  // })
  return axios({
    url: 'https://mock.mengxuegu.com/mock/62d014bf12622141e6caa20c/rfid-admin-mock/api/store/detail',
    params: blockId
  })
}
