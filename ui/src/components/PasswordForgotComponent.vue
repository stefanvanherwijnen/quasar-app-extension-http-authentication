<template>
  <q-card
    v-if="lang"
    square
    style="width: 400px; padding:50px"
  >
    <q-card-section>
      <div class="text-h6">
        {{ lang.auth.password.forgot.header }}
      </div>
    </q-card-section>

    <q-card-section>
      <q-form
        class="q-gutter-md"
      >
          <q-input
            id="email"
            v-model.trim="user.email"
            type="text"
            :label="lang.auth.fields.email"
            :rules="validations['email']"
            lazy-rules
            autofocus
          />
      </q-form>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn
        :label="lang.auth.submit"
        color="primary"
        :loading="loading"
        @click="submit"
      />
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

import isEmail from 'validator/es/lib/isEmail'

import { useLang } from '../lang'

export default defineComponent({
  name: 'PasswordForgotComponent',
  emits: {
    submit: null
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },

  setup (props, ctx) {
    const lang = useLang()
    const { emit } = ctx

    const user = ref({
      email: '',
    })
    const validations = computed<Record<string, ((val: string) => (boolean | string))[]>>(() => ({
      email: [
        val => !!val || lang.value.auth.validations.required,
        val => isEmail(val) || lang.value.auth.validations.email
      ]
    }))

    function submit () {
      emit('submit', user.value)
    }

    return {
      lang,
      user,
      validations,
      submit
    }
  }
})
</script>
