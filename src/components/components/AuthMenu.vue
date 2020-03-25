<template>
  <div>
    <div class="column flex-center">
      <q-icon
        name="person"
        size="3rem"
        class="q-mt-lg"
      />
      <div v-if="$auth.user()">
        {{ $auth.user().email }}
      </div>
    </div>
    <q-list
      no-border
      link
      inset-delimiter
    >
      <q-item
        v-if="this.$auth.check()"
        clickable
        @click="$router.push('/account/home')"
      >
        <q-item-section avatar>
          <q-icon name="person" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ lang.auth.myAccount }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item
        v-if="!this.$auth.check()"
        clickable
        @click="$router.push('/login')"
      >
        <q-item-section avatar>
          <q-icon name="exit_to_app" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ lang.auth.login.login }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item
        v-if="!this.$auth.check()"
        clickable
        @click="$router.push('/register')"
      >
        <q-item-section avatar>
          <q-icon name="person_add" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ lang.auth.register.register }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item
        v-if="this.$auth.check()"
        clickable
        @click="$router.push('/logout')"
      >
        <q-item-section avatar>
          <q-icon name="power_settings_new" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ lang.auth.logout.logout }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  name: 'AuthMenu',
  data () {
    return {
      lang: {
        auth: {}
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
