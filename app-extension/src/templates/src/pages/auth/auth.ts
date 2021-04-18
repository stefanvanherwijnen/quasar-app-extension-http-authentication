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
  setTokenCookie
} from 'quasar-ui-http-authentication/src/index'
import { Router } from 'vue-router'
import { ref, Ref } from 'vue'

export const useLogin = ({ router }: { router?: Router} = {}) => {
  /**
   * Replace with your own function
   */
  const loading = ref(false)
  const result = ref()
  const fetch = (user: Ref<unknown>, rememberMe?: boolean) => {
    loading.value = true
    return new Promise<{ user: Record<string, unknown>, token: string }>((resolve, reject) => {
      setTimeout(() => {
        resolve({
          user: {
            email: 'email@local.host',
            roles: []
          },
          token: 'token'
        })
      }, 1000)
    }).then((res) => {
      result.value = res
      const { user, token } = res
      setUser(user)
      // setHeader() -- e.g. axios.defaults.headers.common.Authorization = `Bearer ${token}`
      setTokenCookie(token, rememberMe)
      return res
    }).catch((res: unknown) => {
      if (res === '401') return verificationRequiredDialog({})
      if (res === '403') return invalidCredentialsDialog({})
    }).finally(() => {
      loading.value = false
    })
  }

  return { result, loading, fetch }
}

export const useRegister  = ({ router }: { router?: Router} = {}) => {
  /**
   * Replace with your own function
   */
  const loading = ref(false)
  const result = ref()
  const fetch = (user: Ref<unknown>) => {
    loading.value = true
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('200')
      }, 1000)
    }).then((res: unknown) => {
      result.value = res
      return res
    }).catch((res: unknown) => {
      if (res === '403') return invalidDataDialog({})
      if (res === '409') return alreadyRegisteredDialog({})
      return registrationErrorDialog({})
    }).finally(() => {
      loading.value = false
    })
  }

  return { result, loading, fetch }
}


export const usePasswordForgot = ({ router }: { router?: Router} = {}) => {
  /**
   * Replace with your own function
   */
  const loading = ref(false)
  const result = ref()
  const fetch = (user: Ref<unknown>) => {
    loading.value = true
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('200')
      }, 1000)
    }).then((res: unknown) => {
      result.value = res
      checkEmailDialog({
        onOk: () => router?.push('/login')
      })
      return res
    }).catch((res: unknown) => {
      return unknownEmailDialog({})
    }).finally(() => {
      loading.value = false
    })
  }

  return { result, loading, fetch }
}

export const usePasswordReset = ({ router }: { router?: Router} = {}) => {
  /**
   * Replace with your own function
   */
  const loading = ref(false)
  const result = ref()
  const fetch = (user: Ref<unknown>, token: string) => {
    loading.value = true
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('200')
      }, 1000)
    }).then((res: unknown) => {
      result.value = res
      passwordResetSuccessDialog({
        onOk: () => router?.push('/login')
      })
      return res
    }).catch((res: unknown) => {
      console.error(res)
    }).finally(() => {
      loading.value = false
    })
  }

  return { result, loading, fetch }
}

export const useVerify = ({ router }: { router?: Router} = {}) => {
  /**
   * Replace with your own function
   */
  const loading = ref(false)
  const result = ref()
  const fetch = (token: string) => {
    loading.value = true
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('200')
      }, 1000)
    }).then((res: unknown) => {
      result.value = res
      verificationSuccessDialog({
        onOk: () => router?.push('/login')
      })
      return res
    }).catch((res: unknown) => {
      return verificationFailedDialog({})
    }).finally(() => {
      loading.value = false
    })
  }

  return { result, loading, fetch }
}