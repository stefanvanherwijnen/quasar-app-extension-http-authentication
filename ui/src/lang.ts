export interface Language {
  lang: string,
  auth: {
    submit: string
    ok: string
    cancel: string
    myAccount: string
    navigation: string
    fields: {
      email: string
      username: string
      password: string
      repeatPassword: string
    },
    login: {
      login: string
      passwordForgot: string
      verificationRequired: string
      invalidCredentials: string
      rememberMe: string
      registerMessage: string
      register: string,
      createAccount: string
    },
    register: {
      register: string
      invalidData: string
      alreadyRegistered: string
      accountCreated: string
      checkEmail: (email: string) => string
      error: string
    },
    verification: {
      success: string
      failed: string
    },
    logout: {
      confirmation: string
      confirm: string
      logout: string
      cancel: string
    },
    password: {
      forgot: {
        header: string
        checkEmail: string
        unknownEmail: string
      },
      reset: {
        header: string
        success: string
      }
    },
    validations: {
      required: string
      passwordLength: (length: string | number) => string
      passwordMatch: string
      email: string
      username: string
    }
  }
}

import { ref, Ref } from 'vue'
export const lang = ref()

export const defineLang = (lang: Language) => {
  return lang
}

export const useLang = () => {
  return lang as Ref<Language>
}

export const loadLang = async (locale: string) => {
  try {
    const data = (await import(`./lang/${locale}.ts`)).default

    if (data) {
      lang.value = data
    }

  } catch (e) {
    throw new Error(`Failed to load ${locale} locale.`)
  }
}