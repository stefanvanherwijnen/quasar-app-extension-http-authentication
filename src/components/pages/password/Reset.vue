<template>
  <q-page class="flex flex-center">
    <q-card
      square
      style="width: 400px; padding:50px"
    >
      <q-card-section>
        <div class="text-h6">
          {{ lang.auth.password.reset.header }}
        </div>
      </q-card-section>

      <q-form
        class="q-gutter-md"
        @submit="onSubmit"
      >
        <q-card-section>
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
          />
        </q-card-section>
        <q-card-actions>
          <q-btn
            :label="lang.auth.submit"
            color="primary"
            :loading="loading"
            type="submit"
          />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
import equals from 'validator/lib/equals'

var minPasswordLength = 8

export default {
  name: 'PasswordReset',
  data () {
    return {
      lang: {
        auth: {}
      },
      data: {
        password: '',
        repeatPassword: ''
      },
      loading: false,
      validations: {
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
      this.loading = true
      this.token = this.$route.query.token
      this.$auth
        .passwordReset({
          token: this.token,
          data: { password: this.data.password }
        })
        .then(response => {
          this.$q
            .dialog({
              message: this.lang.auth.password.reset.success
            })
            .onOk(() => {
              this.$router.push('/login')
            })
        })
        .catch(error => {
          console.error(error)
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
