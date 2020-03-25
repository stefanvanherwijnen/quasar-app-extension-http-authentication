<template>
  <q-page class="flex flex-center">
    <q-card
      square
      style="width: 400px; padding:50px"
    >
      <q-card-section>
        <div class="text-h6">
          {{ lang.auth.password.forgot.header }}
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
            type="text"
            :label="lang.auth.email"
            :rules="validations['email']"
            lazy-rules
            autofocus
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
import isEmail from 'validator/es/lib/isEmail'

export default {
  name: 'PasswordForgot',
  data () {
    return {
      lang: {
        auth: {}
      },
      data: {
        email: ''
      },
      loading: false,
      validations: {
        email: [
          val => !!val || this.lang.auth.validations.required,
          val => isEmail(val) || this.lang.auth.validations.email
        ]
      }
    }
  },
  mounted () {
    if (this.$auth.check()) {
      this.$router.push('/account')
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
      const isoName = this.$q.lang.isoName || 'en-us'
      let lang
      try {
        lang = require(`http-authentication/lang/${isoName}`)
      } catch (e) { }

      if (lang !== void 0) {
        this.lang.auth = { ...lang.default.auth }
      }
    },
    onSubmit () {
      this.loading = true
      this.$auth
        .passwordForgot(this.data)
        .then(response => {
          this.$q
            .dialog({
              message: this.lang.auth.password.forgot.checkEmail
            })
            .onOk(() => {
              this.$router.push('/login')
            })
        })
        .catch(error => {
          this.$q
            .dialog({
              message: this.lang.auth.password.forgot.unknownEmail
            })
          console.error(error)
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
