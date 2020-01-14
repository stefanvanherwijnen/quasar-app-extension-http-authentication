<template>
  <q-page
    padding
    class="flex flex-center"
  >
    <q-card
      square
      style="width: 400px; padding:50px"
    >
      <q-card-section>
        <div class="text-h6">
          {{ lang.auth.register.register }}
        </div>
      </q-card-section>
      <q-form
        class="q-gutter-md"
        @submit="onSubmit"
      >
        <q-card-section>
          <q-input
            id="email"
            v-model.trim="data.email"
            type="email"
            :label="lang.auth.email"
            bottom-slots
            autofocus
            :rules="validations['email']"
            lazy-rules
          />
          <q-input
            v-model.trim="data.name"
            type="text"
            :label="lang.auth.register.name"
            :rules="validations['name']"
            lazy-rules
          />
          <q-input
            id="password"
            v-model="data.password"
            type="password"
            :label="lang.auth.register.password"
            bottom-slots
            :rules="validations['password']"
            lazy-rules
          />
          <q-input
            id="repeatPassword"
            v-model="data.repeatPassword"
            type="password"
            :label="lang.auth.register.repeatPassword"
            bottom-slots
            required
            :rules="validations['repeatPassword']"
            lazy-rules
          />
        </q-card-section>
        <q-card-actions>
          <q-btn
            :label="lang.auth.register.register"
            :loading="loading"
            color="primary"
            type="submit"
          />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-page>
</template>

<style>
</style>

<script>
import isEmail from 'validator/lib/isEmail'
import equals from 'validator/lib/equals'

const minPasswordLength = 8

export default {
  name: 'Register',
  data () {
    return {
      lang: {
        auth: {}
      },
      data: {
        name: '',
        email: '',
        password: '',
        repeatPassword: ''
      },
      loading: false,
      minPasswordLength: minPasswordLength,
      validations: {
        email: [
          val => !!val || this.lang.auth.validations.required,
          val => isEmail(val) || this.lang.auth.validations.email
        ],
        name: [val => !!val || this.lang.auth.validations.required],
        password: [
          val => !!val || this.lang.auth.validations.required,
          val =>
            val.length > minPasswordLength ||
            this.lang.auth.validations.passwordLength(minPasswordLength)
        ],
        repeatPassword: [
          val => !!val || this.lang.auth.validations.required,
          val =>
            equals(val, this.data.password) ||
            this.lang.auth.validations.passwordMatch
        ]
      }
    }
  },
  watch: {
    '$q.lang.isoName' (val) {
      this.__setupLang()
    }
  },
  beforeMount () {
    this.__setupLang()
  },
  methods: {
    __setupLang () {
      let isoName = this.$q.lang.isoName || 'en-us'
      let lang
      try {
        lang = require(`auth-token-based/lang/${isoName}`)
      } catch (e) { }

      if (lang !== void 0) {
        this.lang['auth'] = { ...lang.default.auth }
      }
    },
    onSubmit () {
      this.$q.dialog({
        message: this.lang.auth.register.checkEmail(this.data.email),
        cancel: true
      })
        .onOk(() => {
          this.loading = true
          this.$auth
            .register(this.data)
            .then(() => {
              this.$q
                .dialog({
                  message: this.lang.auth.register.accountCreated
                })
                .onOk(data => {
                  this.$router.push('/login')
                })
            })
            .catch(error => {
              if (error.response) {
                if (error.response.status === 422) {
                  this.$q.dialog({
                    message: this.lang.auth.register.invalidData
                  })
                } else if (error.response.status === 409) {
                  this.$q.dialog({
                    message: this.lang.auth.register.alreadyRegistered
                  })
                } else {
                  this.$q.dialog({
                    message: this.lang.auth.register.error
                  })
                  console.error(error)
                }
              }
            })
            .finally(() => {
              this.loading = false
            })
        })
    }
  }
}
</script>
