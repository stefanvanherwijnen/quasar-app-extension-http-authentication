<template>
  <div />
</template>

<script>
export default {
  name: 'Logout',
  data () {
    return {
      lang: {
        auth: {}
      }
    }
  },
  mounted () {
    this.$q.dialog({
      title: this.lang.auth.logout.confirm,
      message: this.lang.auth.logout.confirmation,
      ok: this.lang.auth.logout.logout,
      cancel: this.lang.auth.logout.cancel
    }).onOk(() => {
      this.$auth.logout().then(() => {
        this.$router.replace('/')
      })
    }).onCancel(() => {
      this.$router.go(-1)
    })
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
    }
  }
}
</script>
