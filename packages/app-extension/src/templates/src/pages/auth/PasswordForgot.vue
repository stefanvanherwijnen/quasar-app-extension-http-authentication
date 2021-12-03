<template>
  <q-page class="flex flex-center">
    <password-forgot-component
      @submit="passwordForgot"
      :loading="loading"
    ></password-forgot-component>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { usePasswordForgot } from './auth'
export default defineComponent({
  name: 'PasswordForgotPage',
  components: {
  
  },
  setup () {
    const router = useRouter()

    const { loading, fetch: passwordForgot } = usePasswordForgot()
    
    return {
      router,
      loading,
      passwordForgot
    }
  }
})
</script>