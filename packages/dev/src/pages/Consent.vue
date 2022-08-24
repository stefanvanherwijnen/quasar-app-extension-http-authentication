<template>
  <consent-component
    :client="client"
    :scopes="scopes"
    :claims="claims"
    :resource-scopes="resourceScopes"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
  setup() {
    const client = {
      clientName: 'Test client',
      clientUri: 'https://localhost'
    }
    const scopes = [
      {
        name: 'Test scope'
      }
    ]
    const claims = [
      {
        name: 'Test claim'
      }
    ]
    const resourceScopes = [
      {
        name: 'Test resource scope'
      }
    ]

    return {
      client,
      scopes,
      claims,
      resourceScopes
    }
  }
})
</script>
