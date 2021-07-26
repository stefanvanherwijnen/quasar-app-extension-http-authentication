<template>
  <login-component
    identifier-field="username"
    :loading="loading"
    :q-form="{ 
      action: 'https://localhost:8083',
      method: 'post'
    }"
    register-url='/register'
    password-forgot-url='/password-forgot'
  ></login-component>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue'
import { useRouter } from 'vue-router'
import { verificationRequiredDialog, invalidCredentialsDialog } from '../../src/utils/helpers'
import { useLang } from '../../src/lang'

export default defineComponent({
  name: 'App',
  components: {
  
  },
  setup (props, ctx) {
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
          if (res === '401') return verificationRequiredDialog({}, lang)
          if (res === '403') return invalidCredentialsDialog({}, lang)
        }).finally(() => {
          loading.value = false
        })
      }

      return { result, loading, fetch }
    }

    const { loading, fetch: login } = fn({})

    return {
      router,
      log,
      login,
      loading
    }
  }
})
</script>