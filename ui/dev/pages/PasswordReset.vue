<template>
  <password-reset-component
    @submit="passwordReset"
    :token="token"
    :loading="loading"
  ></password-reset-component>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import { useRouter, Router } from 'vue-router'
import { passwordResetSuccessDialog } from '../../src/utils/helpers'
import { useLang } from '../../src/lang'

export default defineComponent({
  name: 'App',
  components: {
  
  },
  setup (props, ctx) {
    const router = useRouter()
    const token = ref('token')
    const lang = useLang()

    const fn = ({ router }: { router?: Router} = {}) => {
      /**
       * Replace with your own function
       */
      const loading = ref(false)
      const result = ref()
      const fetch = (user: Ref<unknown>, token: string) => {
        loading.value = true
        result.value = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve('200')
          }, 1000)
        }).then((res: unknown) => {
          return passwordResetSuccessDialog({
            onOk: () => router?.push('/login')
          }, lang)
        }).catch((res: unknown) => {

        }).finally(() => {
          loading.value = false
        })
      }

      return { result, loading, fetch }
    }

    const { result, loading, fetch: passwordReset } = fn()

    return {
      router,
      token,
      passwordReset,
      loading
    }
  }
})
</script>