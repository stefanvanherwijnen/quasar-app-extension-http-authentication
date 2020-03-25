<template>
  <div>
    <register-page :extra-fields="extraFields">
      <template #extraFields="props">
        <q-input
          v-model="props.data.telephoneNumber"
          label="Telephone number"
          bottom-slots
          required
          :rules="[val => !!val]"
          lazy-rules
        />
      </template>
    </register-page>
  </div>
</template>

<style>
</style>

<script>
import registerPage from 'http-authentication/pages/Register.vue'

export default {
  name: 'Register',
  components: {
    registerPage
  },
  data () {
    return {
      lang: {
        auth: {}
      },
      extraFields: {
        telephoneNumber: ''
      }
    }
  }
}
</script>
