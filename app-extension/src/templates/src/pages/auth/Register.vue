<template>
  <q-page class="flex flex-center">
    <register-component
      identifier-field="username"
      :loading="loading"
      :extra-fields="extraFields"
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
  components: {
  
  },
  setup (props, ctx) {
    const router = useRouter()
    const extraFields = ref([
      { name: 'phone', label: 'Phone number' }
    ])

    const { result, loading, fetch: register } = useRegister({ router })

    return {
      router,
      extraFields,
      register,
      loading
    }
  }
})
</script>