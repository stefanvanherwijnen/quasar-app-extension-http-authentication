import {
  invalidCredentialsDialog,
  verificationRequiredDialog,
  alreadyRegisteredDialog,
  invalidDataDialog,
  registrationErrorDialog,
  checkEmailDialog,
  unknownEmailDialog,
  passwordResetSuccessDialog,
  verificationSuccessDialog,
  verificationFailedDialog,
  setUser,
  setTokenCookie,
  logoutDialog,
  useLang
} from 'quasar-ui-http-authentication'
import type { Router } from 'vue-router'
import type { Ref } from 'vue';
import { ref } from 'vue'
import { useQuasar } from 'quasar'

export interface User {
  email: string
  username: string
  password: string
}

export const user = ref({})
export const roles = ref<unknown[]>([])

export const useLogin = ({ router }: { router?: Router } = {}) => {
  /**
   * Replace with your own function
   */
  const $q = useQuasar()
  const lang = useLang()
  const loading = ref(false)
  const result = ref()
  const fetch = (user: Ref<unknown>, rememberMe?: boolean) => {
    loading.value = true
    return new Promise<{ user: Record<string, unknown>; token: string }>(
      (resolve, reject) => {
        setTimeout(() => {
          resolve({
            user: {
              email: 'email@local.host',
              roles: []
            },
            token: 'token'
          })
        }, 1000)
      }
    )
      .then((res) => {
        result.value = res
        const { user, token } = res
        setUser(user)
        // setHeader() -- e.g. axios.defaults.headers.common.Authorization = `Bearer ${token}`
        setTokenCookie($q, token, rememberMe)
        return res
      })
      .catch((res: unknown) => {
        if (res === '401') return verificationRequiredDialog($q, {}, lang)
        if (res === '403') return invalidCredentialsDialog($q, {}, lang)
      })
      .finally(() => {
        loading.value = false
      })
  }

  return { result, loading, fetch }
}

export const useLogout = ({ router }: { router: Router }) => {
  /**
   * Replace with your own function
   */
  const $q = useQuasar()
  const lang = useLang()

  const logout = () =>
    logoutDialog(
      $q,
      {
        onOk: () => router.push('/')
      },
      lang
    )

  return logout
}

export const useRegister = ({ router }: { router?: Router } = {}) => {
  /**
   * Replace with your own function
   */
  const $q = useQuasar()
  const lang = useLang()
  const loading = ref(false)
  const result = ref()
  const fetch = (user: Ref<unknown>) => {
    loading.value = true
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('200')
      }, 1000)
    })
      .then((res: unknown) => {
        result.value = res
        return res
      })
      .catch((res: unknown) => {
        if (res === '403') return invalidDataDialog($q, {}, lang)
        if (res === '409') return alreadyRegisteredDialog($q, {}, lang)
        return registrationErrorDialog($q, {}, lang)
      })
      .finally(() => {
        loading.value = false
      })
  }

  return { result, loading, fetch }
}

export const usePasswordForgot = ({ router }: { router?: Router } = {}) => {
  /**
   * Replace with your own function
   */
  const $q = useQuasar()
  const lang = useLang()
  const loading = ref(false)
  const result = ref()
  const fetch = (user: Ref<unknown>) => {
    loading.value = true
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('200')
      }, 1000)
    })
      .then((res: unknown) => {
        result.value = res
        checkEmailDialog(
          $q,
          {
            onOk: () => router?.push('/login')
          },
          lang
        )
        return res
      })
      .catch((res: unknown) => {
        return unknownEmailDialog($q, {}, lang)
      })
      .finally(() => {
        loading.value = false
      })
  }

  return { result, loading, fetch }
}

export const usePasswordReset = ({ router }: { router?: Router } = {}) => {
  /**
   * Replace with your own function
   */
  const $q = useQuasar()
  const lang = useLang()
  const loading = ref(false)
  const result = ref()
  const fetch = (user: Ref<unknown>, token: string) => {
    loading.value = true
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('200')
      }, 1000)
    })
      .then((res: unknown) => {
        result.value = res
        passwordResetSuccessDialog(
          $q,
          {
            onOk: () => router?.push('/login')
          },
          lang
        )
        return res
      })
      .catch((res: unknown) => {
        console.error(res)
      })
      .finally(() => {
        loading.value = false
      })
  }

  return { result, loading, fetch }
}

export const useVerify = ({ router }: { router?: Router } = {}) => {
  /**
   * Replace with your own function
   */
  const $q = useQuasar()
  const lang = useLang()
  const loading = ref(false)
  const result = ref()
  const fetch = (token: string) => {
    loading.value = true
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('200')
      }, 1000)
    })
      .then((res: unknown) => {
        result.value = res
        verificationSuccessDialog(
          $q,
          {
            onOk: () => router?.push('/login')
          },
          lang
        )
        return res
      })
      .catch((res: unknown) => {
        return verificationFailedDialog($q, {}, lang)
      })
      .finally(() => {
        loading.value = false
      })
  }

  return { result, loading, fetch }
}
