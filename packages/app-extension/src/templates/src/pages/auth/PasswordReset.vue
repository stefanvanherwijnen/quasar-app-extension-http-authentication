<template>
  <q-page class="flex flex-center">
    <password-reset-component
      @submit="passwordReset"
      :loading="loading"
      :token="token"
    ></password-reset-component>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { usePasswordReset } from './auth'

export default defineComponent({
  name: 'PasswordResetPage',
  components: {},
  setup() {
    const router = useRouter()
    const route = useRoute()
    const token = route.query.token

    const { loading, fetch: passwordReset } = usePasswordReset({ router })

    return {
      router,
      token,
      loading,
      passwordReset
    }
  }
})
</script>
