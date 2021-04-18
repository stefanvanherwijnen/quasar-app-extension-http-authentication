<template>
  <register-component
    identifier-field="username"
    :loading="loading"
    :extra-fields="extraFields"
    @submit="register"
  ></register-component>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import { useRouter, Router } from 'vue-router'
import {
  registrationErrorDialog,
  invalidDataDialog,
  alreadyRegisteredDialog,
  accountCreatedDialog
} from '../../src/utils/helpers'
export default defineComponent({
  name: 'App',
  components: {
  
  },
  setup (props, ctx) {
    const router = useRouter()
    const extraFields = ref([
      { name: 'phone', label: 'Phone number' }
    ])

    const fn  = ({ router }: { router?: Router}) => {
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
          accountCreatedDialog({
            onOk: () => router.push('/login')
          })
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

    const log = (val: string) => {
      console.log(val)
    }

    const { result, loading, fetch: register } = fn({ router })

    return {
      router,
      extraFields,
      log,
      register,
      loading
    }
  }
})
</script>