<template>
  <q-card v-if="lang" square style="width: 400px; padding: 50px">
    <q-card-section>
      <div class="text-h6">
        {{ lang.auth.login.login }}
      </div>
    </q-card-section>

    <q-form ref="form" class="q-gutter-md" @submit="submit" v-bind="qForm">
      <q-card-section>
        <q-input
          v-if="identifierField === 'email'"
          name="email"
          id="email"
          v-model.trim="user.email"
          type="email"
          :label="lang.auth.fields.email"
          :rules="validations['email']"
          lazy-rules
          autofocus
        />
        <q-input
          v-if="identifierField === 'username'"
          name="username"
          v-model.trim="user.username"
          type="text"
          :label="lang.auth.fields.username"
          :rules="validations['username']"
          lazy-rules
        />
        <q-input
          id="password"
          name="password"
          v-model="user.password"
          :type="showPassword ? 'text' : 'password'"
          :label="lang.auth.fields.password"
          :rules="validations['password']"
          lazy-rules
          bottom-slots
        >
          <template v-slot:append>
            <q-icon
              :name="showPassword ? 'visibility' : 'visibility_off'"
              class="cursor-pointer"
              @click="showPassword = !showPassword"
            />
          </template>
        </q-input>
        <q-checkbox
          id="rememberMe"
          v-model="rememberMe"
          :label="lang.auth.login.rememberMe"
        />
        <br />
        <q-btn
          v-if="passwordUpdateUrl"
          :label="lang.auth.login.passwordForgot"
          size="sm"
          flat
          :to="passwordUpdateUrl"
        ></q-btn>
        <!-- <a class="cursor-pointer text-blue text-underline" @click="toPasswordForgot">{{ lang.auth.login.passwordForgot }}</a> -->
      </q-card-section>

      <q-card-actions align="between">
        <q-btn
          v-if="registerUrl"
          :label="lang.auth.login.createAccount"
          size="sm"
          flat
          :to="registerUrl"
        ></q-btn>
        <q-btn
          :label="lang.auth.login.login"
          color="primary"
          :loading="loading"
          type="submit"
        />
      </q-card-actions>
    </q-form>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, computed, PropType } from 'vue'
import isEmail from 'validator/es/lib/isEmail'
import { useLang } from '../lang'
import {
  QForm,
  QBtn,
  QCard,
  QCardSection,
  QCardActions,
  QInput,
  QCheckbox,
  QIcon
} from 'quasar'

export default defineComponent({
  name: 'LoginComponent',
  components: {
    QForm,
    QBtn,
    QCard,
    QCardSection,
    QCardActions,
    QInput,
    QCheckbox,
    QIcon
  },
  emits: {
    submit: null
  },
  props: {
    identifierField: {
      type: String,
      required: true,
      validator: (val: string) => ['email', 'username'].includes(val),
      default: 'email'
    },
    loading: {
      type: Boolean,
      default: false
    },
    qForm: {
      type: Object
    },
    registerUrl: {
      type: String
    },
    passwordUpdateUrl: {
      type: String
    }
  },

  setup(props, ctx) {
    const { qForm } = toRefs(props)
    const form = ref<{
      validate: () => Promise<void>
    }>()
    const { identifierField } = toRefs(props)
    const { emit } = ctx
    const lang = useLang()

    const user = ref({
      [identifierField.value]: '',
      password: ''
    })
    const rememberMe = ref(false)
    const validations = computed<
      Record<string, ((val: string) => boolean | string)[]>
    >(() => ({
      email: [
        (val) => !!val || lang.value.auth.validations.required,
        (val) => isEmail(val) || lang.value.auth.validations.email
      ],
      username: [(val) => !!val || lang.value.auth.validations.required],
      password: [(val) => !!val || lang.value.auth.validations.required]
    }))
    const showPassword = ref(false)

    function submit(evt: any) {
      form.value?.validate().then(() => {
        emit('submit', { ...user.value, rememberMe: rememberMe.value })
        if (qForm.value) evt.target.submit()
      })
    }

    return {
      form,
      user,
      rememberMe,
      lang,
      validations,
      identifierField,
      showPassword,
      submit
    }
  }
})
</script>
