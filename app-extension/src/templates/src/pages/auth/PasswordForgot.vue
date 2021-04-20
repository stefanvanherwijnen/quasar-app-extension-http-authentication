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
  setup (props, ctx) {
    const router = useRouter()

    const { result, loading, fetch: passwordForgot } = usePasswordForgot()
    
    return {
      router,
      loading,
      passwordForgot
    }
  }
})
</script>