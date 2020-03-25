<template>
  <q-page
    v-cloak
    padding
  >
    <p>
      {{ message }}
    </p>
  </q-page>
</template>

<script>
export default {
  name: 'Verification',
  data () {
    return {
      lang: {
        auth: {}
      },
      token: '',
      message: ''
    }
  },
  mounted () {
    this.verifyUser()
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
    verifyUser () {
      this.token = this.$route.query.token

      this.$auth.verify(this.token).then((response) => {
        this.message = this.lang.auth.verification.success
      })
        .catch((error) => {
          if (error.response) {
            if (error.response.status === 422) {
              this.message = this.lang.auth.verification.failed
            }
          }
          console.error(error)
        })
    }
  }
}
</script>

<style>
[v-cloak] {
  display: none;
}
</style>
