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
  return request({
    url: '/store/update',
    method: 'POST',
    data: {
      ...data,
      blockId: id
    }
  })
}

export const allStoreList = () => {
  return request({
    url: '/store/all-list'
  })
}

// 根据blockId获取试块详细信息
export const blockDetail = (blockId) => {
  return request({
    url: '/store/detail',
    params: {
      blockId
    }
  })
}

// 根据形状获取规格列表
export const getSpecificationList = (shape) => {
  return request({
    url: '/store/specificationByShape',
    params: {
      shape
    }
  })
}

// 根据形状获取强度等级列表
export const getStrengthList = (shape) => {
  return request({
    url: '/store/strengthByShape',
    params: {
      shape
    }
  })
}
