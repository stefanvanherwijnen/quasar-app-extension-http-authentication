<template>

</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRouter, Router } from 'vue-router'
import {
  verificationSuccessDialog,
  verificationFailedDialog
} from '../../src/utils/helpers'
import { useLang } from '../../src/lang'

export default defineComponent({
  name: 'App',
  components: {
  
  },
  setup (props, ctx) {
    const router = useRouter()
    const ready = ref(false)
    const success = ref()
    const lang = useLang()

    const token = 'token'
    const fn = ({ router }: { router?: Router}) => {
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
          }, lang)
          return res
        }).catch((res: unknown) => {
          return verificationFailedDialog({}, lang)
        }).finally(() => {
          loading.value = false
        })
      }

      return { result, loading, fetch }
    }

    const { result, loading, fetch: verify } = fn({ router })

    onMounted(() => {
      verify(token)
    })

    const log = (val: string) => {
      console.log(val)
    }
    
    return {
      router,
      ready,
      success,
      log
    }
  }
})
</script>