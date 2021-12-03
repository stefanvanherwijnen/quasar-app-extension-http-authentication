<template>
  <password-forgot-component
    @submit="passwordForgot"
    :loading="loading"
  ></password-forgot-component>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import { useRouter, Router } from 'vue-router'
import { checkEmailDialog, unknownEmailDialog, useLang } from 'quasar-ui-http-authentication'

export default defineComponent({
  name: 'App',
  components: {
  
  },
  setup (props, ctx) {
    const router = useRouter()
    const lang = useLang()

    const fn = ({ router }: { router?: Router} = {}) => {
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
          return checkEmailDialog({
            onOk: () => router?.push('/login')
          }, lang)
        }).catch((res: unknown) => {
          return unknownEmailDialog({}, lang)

        }).finally(() => {
          loading.value = false
        })
      }

      return { result, loading, fetch }
    }

    const { result, loading, fetch: passwordForgot } = fn()
    
    return {
      router,
      loading,
      passwordForgot
    }
  }
})
</script>