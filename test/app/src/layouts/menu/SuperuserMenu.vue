<template>
  <q-list
    v-if="this.$auth.check('superuser')"
    no-border
    link
    inset-delimiter
  >
    <q-item-label header>
      {{ $t('auth.superuser.title') }}
    </q-item-label>
    <q-item
      clickable
      @click="$router.push('/superuser/users')"
    >
      <q-item-section avatar>
        <q-icon name="people" />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ $t('auth.superuser.users.title') }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  name: 'SuperuserMenu'
}
</script>
