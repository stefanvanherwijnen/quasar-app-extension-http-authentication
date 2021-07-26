<template>
  {{ lang.auth.verification.slider }}
  <q-slider
    v-model="sliderValue"
    :color="sliderColor"
    :readonly="completed"
  />
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue'
import { useLang } from '../lang'

export default defineComponent({
  emits: ['verified'],
  setup(props, ctx) {
    const { emit } = ctx
    const lang = useLang()
    const sliderValue = ref(0)
    const sliderColor = computed(() => sliderValue.value > 80 ? 'green' : 'red')
    const completed = computed(() => sliderValue.value > 80)

    watch(completed, (newVal, oldVal) => {
      if (newVal) {
        setTimeout(() => sliderValue.value = 100, 500)
        emit('verified')
      }
    })

    return {
      lang,
      sliderValue,
      sliderColor,
      completed
    }
  },
})
</script>
