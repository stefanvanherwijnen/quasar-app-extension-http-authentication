<template>
  <q-page class="flex flex-center">
    <register-component
      identifier-field="username"
      :loading="loading"
      :extra-fields="extraFields"
      @to-password-forgot="toPasswordForgot"
      @submit="register"
    >
    </register-component>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useRegister } from './auth'
export default defineComponent({
  name: 'RegisterPage',
  components: {},
  setup() {
    const router = useRouter()
    const extraFields = ref([{ name: 'phone', label: 'Phone number' }])

    const { loading, fetch: register } = useRegister({ router })

    const toPasswordForgot = () => {
      void router.push('/password/forgot')
    }

    return {
      router,
      extraFields,
      register,
      loading,
      toPasswordForgot
    }
  }
})
</script>
