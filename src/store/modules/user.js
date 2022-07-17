import { login, getUserInfo } from '@/api/sys'
import { setItem, getItem, removeAllItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
import router, { resetRouter } from '@/router'
import { setTimeStamp } from '@/utils/auth'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN),
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    /**
     * 登录请求
     */
    login(context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password
        })
          .then(data => {
            this.commit('user/setToken', data.token)
            // 登录成功跳转到首页
            router.push('/')
            // 记录登录时间戳 用于前端介入用户被动退出
            setTimeStamp()
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    /**
     * 获取用户信息
     */
    async getUserInfo(context) {
      const res = await getUserInfo() // 拿到后端返回的用户信息
      this.commit('user/setUserInfo', res)
      return res
    },
    /**
     * 退出登录
     */
    logout() {
      this.commit('user/setToken', '')
      this.commit('user/setUserInfo', {})
      // 删除本地token缓存
      removeAllItem()
      // TODO:清理权限相关配置
      resetRouter()
      router.push('/login')
    }
  }
}
