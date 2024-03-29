import i18n from '@/i18n'

export const validatePassword = () => {
  return (rule, value, callback) => {
    if (value.length < 5) {
      callback(new Error(i18n.global.t('msg.login.passwordRule')))
    } else {
      callback() // callback入参为空代表校验通过规则
    }
  }
}
