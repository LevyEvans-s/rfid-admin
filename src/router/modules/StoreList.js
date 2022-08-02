import layout from '@/layout'

export default {
  path: '/store',
  component: layout,
  redirect: '/store/list',
  name: 'storeManage',
  meta: {
    title: 'storeManage',
    icon: 'store'
  },
  children: [
    {
      path: '/store/list',
      component: () => import('@/views/store-list/index'),
      meta: {
        title: 'storeList',
        icon: 'store-list'
      }
    }
  ]
}
