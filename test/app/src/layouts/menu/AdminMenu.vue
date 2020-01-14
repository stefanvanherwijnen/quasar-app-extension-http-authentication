<template>
  <q-list
    v-if="this.$auth.check('administrator')"
    no-border
    link
    inset-delimiter
  >
    <q-item-label header>
      {{ $t('auth.administrator.title') }}
    </q-item-label>
    <q-item
      clickable
      @click="$router.push('/admin/home')"
    >
      <q-item-section avatar>
        <q-icon name="home" />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ $t('auth.administrator.home') }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  name: 'AdminMenu'
}
</script>
