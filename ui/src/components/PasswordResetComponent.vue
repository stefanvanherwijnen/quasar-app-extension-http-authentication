<template>
  <q-card
    v-if="lang"
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
      ref="form"
      @submit="submit"
    >
      <q-card-section>
        <q-input
          id="password"
          v-model="user.password"
          :type="showPassword.password ? 'text' : 'password'"
          :label="lang.auth.fields.password"
          bottom-slots
          :rules="validations['password']"
          lazy-rules
        >
          <template v-slot:append>
            <q-icon
              :name="showPassword.password ? 'visibility' : 'visibility_off'"
              class="cursor-pointer"
              @click="showPassword.password = !showPassword.password"
            />
          </template>
        </q-input>
        <q-input
          id="repeatPassword"
          v-model="repeatPassword"
          :type="showPassword.repeatPassword ? 'text' : 'password'"
          :label="lang.auth.fields.repeatPassword"
          bottom-slots
          required
          :rules="validations['repeatPassword']"
          lazy-rules
        >
          <template v-slot:append>
            <q-icon
              :name="showPassword.repeatPassword ? 'visibility' : 'visibility_off'"
              class="cursor-pointer"
              @click="showPassword.repeatPassword = !showPassword.repeatPassword"
            />
          </template>
        </q-input>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          :label="lang.auth.submit"
          color="primary"
          :loading="loading"
          type="submit"
        />
      </q-card-actions>
    </q-form>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, ref, computed, toRefs } from 'vue'

import equals from 'validator/es/lib/equals'

import { useLang } from '../lang'

export default defineComponent({
  name: 'PasswordResetComponent',
  emits: {
    submit: null
  },
  props: {
    minPasswordLength: {
      type: Number,
      default: 8
    },
    loading: {
      type: Boolean,
      default: false
    },
    token: {
      type: String,
      required: true
    }
  },

  setup (props, ctx) {
    const lang = useLang()
    const { emit } = ctx
    const { minPasswordLength, token } = toRefs(props)

    const form = ref<{
      validate: () => Promise<void>
    }>()
    const user = ref({
      password: '',
    })
    const repeatPassword = ref('')
    const validations = computed<Record<string, ((val: string) => (boolean | string))[]>>(() => ({
      password: [
        val => !!val || lang.value.auth.validations.required,
        val =>
          val.length > minPasswordLength.value ||
          lang.value.auth.validations.passwordLength(minPasswordLength.value)
      ],
      repeatPassword: [
        val => !!val || lang.value.auth.validations.required,
        val =>
          equals(val, user.value.password) ||
          lang.value.auth.validations.passwordMatch
      ]
    }))
    const showPassword = ref({
      password: false,
      repeatPassword: false
    })

    function submit () {
      form.value?.validate().then(() => emit('submit', { password: user.value.password }, token.value))
    }

    return {
      form,
      lang,
      user,
      repeatPassword,
      validations,
      showPassword,
      submit
    }
  }
})
</script>
