<template>
  <q-page>
    <login-component
      identifier-field="username"
      :loading="loading"
      @submit="login"
      register-url="/register"
      password-forgot-url="/passwordforgot"
    ></login-component>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useLang, verificationRequiredDialog, invalidCredentialsDialog } from 'quasar-ui-http-authentication'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'LoginPage',
  components: {

  },
  setup (props, ctx) {
    const $q = useQuasar()
    const router = useRouter()
    const lang = useLang()

    const log = (val: string) => {
      console.log(val)
    }

    const fn = () => {
      /**
       * Replace with your own function
       */
      const loading = ref(false)
      const result = ref()
      const fetch = (user: Ref<unknown>) => {
        loading.value = true
        result.value = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve('200')
          }, 1000)
        }).then((res: unknown) => {
          return res
        }).catch((res: unknown) => {
          if (res === '401') return verificationRequiredDialog($q, {}, lang)
          if (res === '403') return invalidCredentialsDialog($q, {}, lang)
        }).finally(() => {
          loading.value = false
        })
      }

      return { result, loading, fetch }
    }

    const { loading, fetch: login } = fn()

    return {
      router,
      log,
      login,
      loading
    }
  }
})
</script>