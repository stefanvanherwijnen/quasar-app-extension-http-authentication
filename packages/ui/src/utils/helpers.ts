import type { Ref } from 'vue'
import { ref } from 'vue'
import type { QVueGlobals } from 'quasar'
import type { Router } from 'vue-router'

import 'vue-router'
import type { Language } from '../lang'
declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean
    requiredRoles?: string[]
    unauthenticatedRouteLocation?: RouteLocationRaw
    unauthorizedRouteLocation?: RouteLocationRaw
  }
}

export const user = ref<Record<string, unknown> | null>({})
export const setUser = (data: Record<string, unknown> | null) => {
  user.value = data
}
export const useUser = () => {
  return user.value
}
export const isLoggedIn = () => {
  return user.value != null
}

export const checkUserRolesPermission = (
  userRoles: Array<string>,
  requiredRoles: Array<string>
) => {
  for (const role in requiredRoles) {
    if (!userRoles.includes(role)) {
      return false
    }
  }
  return true
}

export const setTokenCookie = (
  $q: QVueGlobals,
  token: string,
  rememberMe?: boolean
) => {
  if (rememberMe) {
    $q.cookies.set('authorization_token', token, {
      expires: 365,
      secure: true
    })
  } else {
    $q.cookies.set('authorization_token', token, {
      secure: true
    })
  }
}

export const removeTokenCookie = ($q: QVueGlobals) => {
  $q.cookies.remove('authorization_token')
}

export const getTokenCookie = ($q: QVueGlobals) => {
  return $q.cookies.get('authorization_token')
}

const createDialog =
  ({
    title,
    message,
    ok,
    cancel,
    $q
  }: {
    title?: string
    message: string
    ok?: string
    cancel?: string
    $q: QVueGlobals
  }) =>
  ({ onOk, onCancel }: { onOk?: Function; onCancel?: Function }) => {
    $q.dialog({
      title,
      message,
      ok,
      cancel
    })
      .onOk(() => {
        removeTokenCookie($q)
        if (onOk) onOk()
      })
      .onCancel(() => {
        if (onCancel) onCancel($q)
      })
  }

export const verificationRequiredDialog = (
  $q: QVueGlobals,
  callbacks: { onOk?: Function; onCancel?: Function },
  lang: Ref<Language>
) => {
  createDialog({
    $q,
    message: lang.value.auth.login.verificationRequired
  })(callbacks)
}

export const invalidCredentialsDialog = (
  $q: QVueGlobals,
  callbacks: { onOk?: Function; onCancel?: Function },
  lang: Ref<Language>
) => {
  createDialog({
    $q,
    message: lang.value.auth.login.invalidCredentials
  })(callbacks)
}

export const logoutDialog = (
  $q: QVueGlobals,
  callbacks: { onOk?: Function; onCancel?: Function },
  lang: Ref<Language>
) => {
  createDialog({
    $q,
    title: lang.value.auth.logout.confirm,
    message: lang.value.auth.logout.confirmation,
    ok: lang.value.auth.logout.logout,
    cancel: lang.value.auth.logout.cancel
  })(callbacks)
}

export const unknownEmailDialog = (
  $q: QVueGlobals,
  callbacks: { onOk?: Function; onCancel?: Function },
  lang: Ref<Language>
) => {
  createDialog({
    $q,
    message: lang.value.auth.password.forgot.unknownEmail
  })(callbacks)
}

export const checkEmailDialog = (
  $q: QVueGlobals,
  callbacks: { onOk?: Function; onCancel?: Function },
  lang: Ref<Language>
) => {
  createDialog({
    $q,
    message: lang.value.auth.password.forgot.checkEmail
  })(callbacks)
}

export const passwordResetSuccessDialog = (
  $q: QVueGlobals,
  callbacks: { onOk?: Function; onCancel?: Function },
  lang: Ref<Language>
) => {
  createDialog({
    $q,
    message: lang.value.auth.password.reset.success
  })(callbacks)
}

export const accountCreatedDialog = (
  $q: QVueGlobals,
  callbacks: { onOk?: Function; onCancel?: Function },
  lang: Ref<Language>
) => {
  createDialog({
    $q,
    message: lang.value.auth.register.accountCreated
  })(callbacks)
}

export const invalidDataDialog = (
  $q: QVueGlobals,
  callbacks: { onOk?: Function; onCancel?: Function },
  lang: Ref<Language>
) => {
  createDialog({
    $q,
    message: lang.value.auth.register.invalidData
  })(callbacks)
}

export const alreadyRegisteredDialog = (
  $q: QVueGlobals,
  callbacks: { onOk?: Function; onCancel?: Function },
  lang: Ref<Language>
) => {
  createDialog({
    $q,
    message: lang.value.auth.register.alreadyRegistered
  })(callbacks)
}

export const registrationErrorDialog = (
  $q: QVueGlobals,
  callbacks: { onOk?: Function; onCancel?: Function },
  lang: Ref<Language>
) => {
  createDialog({
    $q,
    message: lang.value.auth.register.error
  })(callbacks)
}

export const verificationSuccessDialog = (
  $q: QVueGlobals,
  callbacks: { onOk?: Function; onCancel?: Function },
  lang: Ref<Language>
) => {
  createDialog({
    $q,
    message: lang.value.auth.verification.success
  })(callbacks)
}

export const verificationFailedDialog = (
  $q: QVueGlobals,
  callbacks: { onOk?: Function; onCancel?: Function },
  lang: Ref<Language>
) => {
  createDialog({
    $q,
    message: lang.value.auth.verification.failed
  })(callbacks)
}

export function setRouteGuard({
  router,
  loggedIn,
  fetchUser,
  checkUserRoles
}: {
  router: Router
  loggedIn: (requiredRoles?: string[]) => boolean
  fetchUser: (requiredRoles?: string[]) => Promise<void>
  checkUserRoles: (record: string[]) => boolean
}) {
  router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.find((record) => record.meta.requiresAuth)
      ?.meta.requiresAuth
    const requiredRoles = to.matched.find((record) => record.meta.requiredRoles)
      ?.meta.requiredRoles
    const unauthenticatedRouteLocation = to.matched.find(
      (record) => record.meta.unauthenticatedRouteLocation
    )?.meta.unauthenticatedRouteLocation
    const unauthorizedRouteLocation = to.matched.find(
      (record) => record.meta.unauthorizedRouteLocation
    )?.meta.unauthorizedRouteLocation

    // const checkAuthorization = () => {
    //   if (!loggedIn()) {
    //     return fetchUser().then(() => {
    //       if (!loggedIn()) return next('/')
    //       if (requiredRoles && checkUserRoles && !checkUserRoles(requiredRoles)) return next({ name: 'account' })
    //       return next()
    //     }).catch(() => {
    //       return next('/')
    //     })
    //   }
    //   if (requiredRoles && checkUserRoles && !checkUserRoles(requiredRoles)) return next({ name: 'account' })
    //   next()
    // }

    if (requiresAuth) {
      if (!loggedIn(requiredRoles)) {
        return fetchUser(requiredRoles)
          .then(() => {
            if (!loggedIn(requiredRoles))
              return next(unauthenticatedRouteLocation || '/')
            if (
              requiredRoles &&
              checkUserRoles &&
              !checkUserRoles(requiredRoles)
            )
              return next(unauthorizedRouteLocation || { name: 'account' })
            return next()
          })
          .catch(() => {
            return next(unauthenticatedRouteLocation || '/')
          })
      }
      if (requiredRoles && checkUserRoles && !checkUserRoles(requiredRoles))
        return next(unauthorizedRouteLocation || { name: 'account' })
    }

    next()
  })
}
