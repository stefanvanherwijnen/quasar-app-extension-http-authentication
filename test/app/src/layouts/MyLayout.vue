<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
        <q-btn
          dense
          borderless
          flat
          icon="settings"
        >
          <q-menu>
            <q-item clickable>
              <q-item-section>{{ $t('settings.language') }}</q-item-section>
              <q-item-section side>
                <q-icon name="keyboard_arrow_right" />
              </q-item-section>

              <q-menu
                anchor="top right"
                self="top left"
              >
                <q-list>
                  <q-item
                    v-for="language in langOptions"
                    :active="lang === language.value"
                    :key="language.value"
                    dense
                    clickable
                    @click="lang = language.value"
                  >
                    <q-item-section>{{ language.label }}</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>

            </q-item>
            <q-item
              clickable
              @click="$q.dark.toggle()"
            >
              <q-item-section avatar>
                <q-icon :name="$q.dark.mode ? 'brightness_low' : 'brightness_high'" />
              </q-item-section>
              <q-item-section>
                {{ $t('settings.darkMode') }}
              </q-item-section>
            </q-item>
            <q-separator />
          </q-menu>
        </q-btn>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <auth-menu />
      <admin-menu />
      <superuser-menu />
      <q-list>
        <q-item-label header>Essential Links</q-item-label>
        <q-item
          clickable
          tag="a"
          target="_blank"
          href="https://quasar.dev"
        >
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Docs</q-item-label>
            <q-item-label caption>quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          tag="a"
          target="_blank"
          href="https://github.quasar.dev"
        >
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Github</q-item-label>
            <q-item-label caption>github.com/quasarframework</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          tag="a"
          target="_blank"
          href="https://chat.quasar.dev"
        >
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Discord Chat Channel</q-item-label>
            <q-item-label caption>chat.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          tag="a"
          target="_blank"
          href="https://forum.quasar.dev"
        >
          <q-item-section avatar>
            <q-icon name="record_voice_over" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Forum</q-item-label>
            <q-item-label caption>forum.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          tag="a"
          target="_blank"
          href="https://twitter.quasar.dev"
        >
          <q-item-section avatar>
            <q-icon name="rss_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Twitter</q-item-label>
            <q-item-label caption>@quasarframework</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          tag="a"
          target="_blank"
          href="https://facebook.quasar.dev"
        >
          <q-item-section avatar>
            <q-icon name="public" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Facebook</q-item-label>
            <q-item-label caption>@QuasarFramework</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import authMenu from 'auth-token-based/components/AuthMenu'
import adminMenu from './menu/AdminMenu'
import superuserMenu from './menu/SuperuserMenu'

import languages from 'quasar/lang/index.json'
const appLanguages = languages.filter(lang =>
  ['nl', 'en-us'].includes(lang.isoName)
)

export default {
  name: 'MyLayout',
  components: {
    authMenu,
    adminMenu,
    superuserMenu
  },
  data () {
    return {
      leftDrawerOpen: false,
      lang: this.$q.lang.isoName
    }
  },
  watch: {
    lang (lang) {
      let language
      try {
        language = require(`quasar/lang/${lang}`)
      } catch (e) { }

      if (language !== void 0) {
        console.log(language)

        this.$q.lang.set(language.default)
      }
    }
  },

  created () {
    this.langOptions = appLanguages.map(lang => ({
      label: lang.nativeName, value: lang.isoName
    }))
  }
}
</script>
