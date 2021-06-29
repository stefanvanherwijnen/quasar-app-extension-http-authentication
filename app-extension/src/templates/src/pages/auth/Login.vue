<template>
  <q-page class="flex flex-center">
    <login-component
      identifier-field="username"
      :loading="loading"
      @submit="login"
      @to-register="router.push('/register')"
      @to-password-forgot="router.push('/password/forgot')"
    ></login-component>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useLogin } from './auth'
export default defineComponent({
  name: 'LoginPage',
  components: {
  
  },
  setup () {
    const router = useRouter()

    const { loading, fetch: login } = useLogin()

    return {
      router,
      login,
      loading
    }
  }
})
</script>