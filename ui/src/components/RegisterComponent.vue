<template>
    <q-card
      v-if="lang"
      square
      style="width: 400px; padding:50px"
    >
      <q-card-section>
        <div class="text-h6">
          {{ lang.auth.register.register }}
        </div>
        <a class="cursor-pointer text-blue text-underline" @click="toPasswordForgot">{{ lang.auth.login.passwordForgot }}</a>
      </q-card-section>

      <q-form
        class="q-gutter-md"
        ref="form"
        @submit="submit"
        v-bind="qForm"
      >
        <q-card-section>
          <q-input
            v-if="identifierField === 'email'"
            id="email"
            name="email"
            v-model.trim="user.email"
            type="email"
            :label="lang.auth.fields.email"
            bottom-slots
            autofocus
            :rules="validations['email']"
            lazy-rules
          />
          <q-input
            v-if="identifierField === 'username'"
            v-model.trim="user.username"
            name="username"
            type="text"
            :label="lang.auth.fields.username"
            :rules="validations['username']"
            lazy-rules
          />
          <q-input
            v-for="field in extraFields"
            :key="field.name"
            v-model="user[field.name]"
            type="text"
            :name="field.name"
            :label="field.label"
            :rules="field.validation"
            bottom-slots
          />
          <q-input
            id="password"
            name="password"
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

          <verification-slider @verified="verify" />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            :label="lang.auth.register.register"
            :loading="loading"
            :disabled="!verified"
            type="submit"
            color="primary"
          />
        </q-card-actions>
      </q-form>
    </q-card>
</template>

<script lang="ts">
import { defineComponent, ref, computed, toRefs, PropType } from 'vue'

import isEmail from 'validator/es/lib/isEmail'
import equals from 'validator/es/lib/equals'
import isAlphanumeric from 'validator/es/lib/isAlphanumeric'

import { useLang, loadLang } from '../lang'
import { Dialog } from 'quasar'

import VerificationSlider from './VerificationSlider.vue'

export default defineComponent({
  name: 'RegisterComponent',
  components: {
    VerificationSlider
  },
  emits: {
    submit: null,
    toPasswordForgot: null
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    extraFields: {
      type: Array as PropType<{
        name: string
        label: string
        validation: (val: string) => boolean
      }[]>,
      default: () => ([])
    },
    minPasswordLength: {
      type: Number,
      default: 8
    },
    identifierField: {
      type: String,
      required: true,
      validator: (val: string) => ['email', 'username'].includes(val)
    },
    useVerification: {
      type: Boolean,
      default: false
    },
    qForm: {
      type: Object,
      default: {
        method: 'post'
      }
    }
  },

  setup (props, ctx) {
    const lang = useLang()
    const { emit } = ctx
    const { identifierField, extraFields, minPasswordLength, useVerification } = toRefs(props)

    const verified = ref(useVerification ? false : true)
    const verify = () => verified.value = true

    const form = ref<{
      validate: () => Promise<void>
    }>()
    const user = ref<Record<string, string> >({
      [identifierField.value]: '',
      password: '',
      ...(extraFields.value.reduce((acc: Record<string, string>, cur: { name: string }) => {
        acc[cur.name] = ''
        return acc
      }, {}) as Record<string, string>)
    })
    const repeatPassword = ref('')
    const validations = computed<Record<string, ((val: string) => (boolean | string))[]>>(() => ({
        email: [
          val => !!val || lang.value.auth.validations.required,
          val => isEmail(val) || lang.value.auth.validations.email
        ],
        username: [
          val => !!val || lang.value.auth.validations.required,
          val => isAlphanumeric(val) || lang.value.auth.validations.username
        ],
        password: [
          val => !!val || lang.value.auth.validations.required,
          val =>
            val.length >= minPasswordLength.value ||
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

    function register (evt) {
      emit('submit', user.value)
      if (evt) evt.target.submit()
    }
      
    function submit (evt) {
      form.value?.validate().then(() => {
        if (user.value.email === 'email') {
          Dialog.create({
            html: true,
            message: lang.value.auth.register.checkEmail(user.value.email),
            cancel: true
          })
          .onOk(() => {
            register(evt)
          })
        } else {
          register(evt)
        }
      })
    }

    const toPasswordForgot = () => {
      emit('toPasswordForgot')
    }

    return {
      form,
      lang,
      user,
      repeatPassword,
      validations,
      identifierField,
      showPassword,
      submit,
      toPasswordForgot,
      verified,
      verify
    }
  }
})
</script>
