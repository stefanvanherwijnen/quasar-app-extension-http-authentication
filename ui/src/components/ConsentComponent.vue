<template>
  <q-card
    v-if="lang"
    square
    style="width: 400px; padding:50px"
  >
    <q-card-section class="text-center">
      <q-avatar v-if="client.logoUri">
        <img :src="client.logoUri">
      </q-avatar>
      <div class="text-h6">{{ client.clientName }}</div>
      <a>{{ client.clientUri }}</a>
    </q-card-section>

    <q-card-section class="q-pt-none">
      {{ lang.auth.consent.message(client.clientName) }}

      <q-list>
        <q-item v-for="scope in scopes" :key="scope.name">
          <q-item-section avatar>
            <q-icon color="green" name="check" />
          </q-item-section>
          <q-item-section>
            {{ scope.name }}
          </q-item-section>
        </q-item>
        <q-item v-for="claim in claims" :key="claim.name">
          <q-item-section avatar>
            <q-icon color="green" name="check" />
          </q-item-section>
          <q-item-section>
            {{ claim.name }}
          </q-item-section>
        </q-item>
        <q-item v-for="resourceScope in resourceScopes" :key="resourceScope.name">
          <q-item-section avatar>
            <q-icon color="green" name="check" />
          </q-item-section>
          <q-item-section>
            {{ resourceScope.name }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>

    <q-card-actions align="between">
      <q-form @submit="deny" v-bind="denyForm">
        <q-btn :label="lang.auth.consent.deny" type="submit" flat />
      </q-form>
      <q-form @submit="allow" v-bind="allowForm">
        <q-btn :label="lang.auth.consent.allow" type="submit" color="primary" />
      </q-form>
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import { useLang } from '../lang'

export default defineComponent({
  name: 'ConsentComponent',
  props: {
    client: {
      type: Object
    },
    scopes: {
      type: Array
    },
    claims: {
      type: Array
    },
    resourceScopes: {
      type: Array
    },
    denyForm: {
      type: Object
    },
    allowForm: {
      type: Object
    }
  },
  setup(props, ctx) {
    const { emit } = ctx
    const { allowForm, denyForm } = toRefs(props)
    const lang = useLang()
    
    const allow = (evt) => {
      emit('allow')
      if (allowForm.value) evt.target.submit()
    }
    const deny = (evt) => {
      emit('deny')
      if (denyForm.value) evt.target.submit()
    }

    return {
      lang,
      allow,
      deny
    }
  }
})
</script>
