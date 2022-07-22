import request from '@/utils/request'

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
    url: `/store/delete/${id}`
  })
}

export const updateBlock = (id, data) => {
  return request({
    url: `/store/update/${id}`,
    data
  })
}

export const allStoreList = () => {
  return request({
    url: '/store/all-list'
  })
}
