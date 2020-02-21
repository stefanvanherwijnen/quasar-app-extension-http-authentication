<template>
  <q-dialog
    :value="value"
    persistent
    :maximized="$q.screen.lt.md"
    @input="toggle"
  >
    <q-layout
      view="Lhh lpR fff"
      container
      class="bg-white"
      style="height: 750px; minWidth: 85vw"
    >
      <q-header class="bg-primary">
        <q-toolbar>
          <q-btn
            v-close-popup
            icon="close"
            flat
            round
            dense
          />
          <q-toolbar-title>
            <slot name="title" />
          </q-toolbar-title>
          <q-btn
            v-if="submitButton"
            data-v-step="submit-button"
            :disable="!dirty"
            :loading="submitting"
            color="green"
            @click="save"
          >
            <q-icon
              left
              name="save"
            />
            <div>
              {{ this.lang.submit }}
            </div>
          </q-btn>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <q-page
          data-v-step="body"
          class="q-pa-md"
        >
          <slot name="body" />
        </q-page>
      </q-page-container>
    </q-layout>
  </q-dialog>
</template>

<script>
const translations = {
  'en-us': {
    submit: 'Submit'
  },
  nl: {
    submit: 'Versturen'
  }
}
export default {
  name: 'ResponsiveModal',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    dirty: {
      type: Boolean,
      default: true
    },
    submitting: {
      type: Boolean,
      default: false
    },
    submitButton: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      lang: {}
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
        lang = translations[isoName]
      } catch (e) { }

      if (lang) {
        this.lang = { ...lang }
      }
    },
    toggle (value) {
      this.$emit('input', value)
    },
    save () {
      this.$emit('save')
    }
  }
}
</script>

<style>
</style>
