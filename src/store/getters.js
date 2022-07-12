import variables from '@/styles/variables.module.scss'

// vuex快捷访问
const getters = {
  token: state => state.user.token,
  /**
   * @returns true 表示用户信息已存在
   */
  hasUserInfo: state => JSON.stringify(state.user.userInfo) !== '{}',
  userInfo: state => state.user.userInfo,
  cssVar: state => variables,
  sidebarOpened: state => state.app.sidebarOpened
}
export default getters
