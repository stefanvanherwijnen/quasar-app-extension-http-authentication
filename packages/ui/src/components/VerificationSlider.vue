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
import { QSlider } from 'quasar'

export default defineComponent({
  name: 'VerificationSlider',
  components: {
    QSlider
  },
  emits: ['verified'],
  setup(props, ctx) {
    const { emit } = ctx
    const lang = useLang()
    const sliderValue = ref(0)
    const sliderColor = ref('red')
    // const sliderColor = computed(() => sliderValue.value > 80 ? 'green' : 'red')
    const completed = ref(false)
    // const completed = computed(() => sliderValue.value > 80)

    watch(sliderValue, (newVal, oldVal) => {
      if (newVal > 80) {
        sliderColor.value = 'green'
        setTimeout(() => {
          sliderValue.value = 100
          completed.value = true
        }, 500)
        emit('verified')
      }
    })
    // watch(completed, (newVal, oldVal) => {
    //   if (newVal) {
    //     setTimeout(() => sliderValue.value = 100, 500)
    //     emit('verified')
    //   }
    // })

    return {
      lang,
      sliderValue,
      sliderColor,
      completed
    }
  },
})
</script>
