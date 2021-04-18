import { ref } from 'vue'
import { Cookies, Dialog } from 'quasar'
import { useLang } from '../lang'
import { Router } from 'vue-router'


export const user = ref({})
export const setUser = (data: Record<string, unknown>) => {
  user.value = data
}
export const useUser = () => {
  return user.value
}
export const isLoggedIn = () => {
  return user.value !== null
}

export const checkUserRolesPermission = (userRoles: Array<string>, requiredRoles: Array<string>) => {
  for (const role in requiredRoles) {
    if (!userRoles.includes(role)) {
      return false
    }
  }
  return true
}

export const setTokenCookie = (token: string, rememberMe?: boolean) => {
  if (rememberMe) {
    Cookies.set('authorization_token', token, {
      expires: 365,
      secure: true
    })
  } else {
    Cookies.set('authorization_token', token, {
      secure: true 
    })
  }
}

export const removeTokenCookie = () => {
  Cookies.remove('authorization_token')
}

export const getTokenCookie = () => {
  return Cookies.get('authorization_token')
}

const createDialog = 
({title, message, ok, cancel }: {title?: string, message: string, ok?: string, cancel?: string}) =>
({onOk, onCancel}: { onOk?: Function, onCancel?: Function}) => {
  Dialog.create({
      title,
      message,
      ok,
      cancel
    }).onOk(() => {
      removeTokenCookie()
      if (onOk) onOk()
    }).onCancel(() => {
      if (onCancel) onCancel()
    })
}

export const verificationRequiredDialog = (callbacks: { onOk?: Function, onCancel?: Function }) => {
  const lang = useLang()
  createDialog({
    message: lang.value.auth.login.verificationRequired
  })(callbacks)
}

export const invalidCredentialsDialog = (callbacks: { onOk?: Function, onCancel?: Function }) => {
  const lang = useLang()
  createDialog({
    message: lang.value.auth.login.invalidCredentials
  })(callbacks)
}

export const logoutDialog = (callbacks: { onOk?: Function, onCancel?: Function }) => {
  const lang = useLang()
  createDialog({
      title: lang.value.auth.logout.confirm,
      message: lang.value.auth.logout.confirmation,
      ok: lang.value.auth.logout.logout,
      cancel: lang.value.auth.logout.cancel
    })(callbacks)
}

export const unknownEmailDialog = (callbacks: { onOk?: Function, onCancel?: Function }) => {
  const lang = useLang()
  createDialog({
    message: lang.value.auth.password.forgot.unknownEmail
  })(callbacks)
}

export const checkEmailDialog = (callbacks: { onOk?: Function, onCancel?: Function }) => {
  const lang = useLang()
  createDialog({
    message: lang.value.auth.password.forgot.checkEmail
  })(callbacks)
}

export const passwordResetSuccessDialog = (callbacks: { onOk?: Function, onCancel?: Function }) => {
  const lang = useLang()
  createDialog({
    message: lang.value.auth.password.reset.success
  })(callbacks)
}

export const accountCreatedDialog = (callbacks: { onOk?: Function, onCancel?: Function }) => {
  const lang = useLang()
  createDialog({
    message: lang.value.auth.register.accountCreated
  })(callbacks)
}

export const invalidDataDialog = (callbacks: { onOk?: Function, onCancel?: Function }) => {
  const lang = useLang()
  createDialog({
    message: lang.value.auth.register.invalidData
  })(callbacks)
}

export const alreadyRegisteredDialog = (callbacks: { onOk?: Function, onCancel?: Function }) => {
  const lang = useLang()
  createDialog({
    message: lang.value.auth.register.alreadyRegistered
  })(callbacks)
}

export const registrationErrorDialog = (callbacks: { onOk?: Function, onCancel?: Function }) => {
  const lang = useLang()
  createDialog({
    message: lang.value.auth.register.error
  })(callbacks)
}

export const verificationSuccessDialog = (callbacks: { onOk?: Function, onCancel?: Function }) => {
  const lang = useLang()
  createDialog({
    message: lang.value.auth.verification.success
  })(callbacks)
}

export const verificationFailedDialog = (callbacks: { onOk?: Function, onCancel?: Function }) => {
  const lang = useLang()
  createDialog({
    message: lang.value.auth.verification.failed
  })(callbacks)
}

export function setRouteGuard (router: Router, loggedIn: Function, fetchUser: Function, checkUserRoles: Function) {
  router.beforeEach((to, from, next) => {
    const record = to.matched.find(record => record.meta.auth)
    if (record) {
      if (!loggedIn()) {
        return fetchUser().then(() => {
          if (loggedIn()) {
            next('/')
          } else if (
            !checkUserRoles(record.meta.auth)
          ) {
            next('/account')
          } else {
            next()
          }
        }).catch(() => {
          next('/')
        })
      } else if (
        !checkUserRoles(record.meta.auth)
      ) {
        return next('/account')
      }
    }
    next()
  })
}