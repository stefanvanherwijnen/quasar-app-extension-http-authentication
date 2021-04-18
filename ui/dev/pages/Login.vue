<template>
  <login-component
    identifier-field="username"
    :loading="loading"
    @submit="login"
    @to-register="router.push('/register')"
    @to-password-forgot="router.push('/password/forgot')"
  ></login-component>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue'
import { useRouter } from 'vue-router'
import { verificationRequiredDialog, invalidCredentialsDialog } from '../../src/utils/helpers'
export default defineComponent({
  name: 'App',
  components: {
  
  },
  setup (props, ctx) {
    const router = useRouter()

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
          if (res === '401') return verificationRequiredDialog({})
          if (res === '403') return invalidCredentialsDialog({})
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