export default function (ctx) {
  return {
    boot: [],
    extras: ['material-icons'],
    framework: {
      components: [
        'QCardSection',
        'QInput',
        'QIcon',
        'QCheckbox',
        'QBtn',
        'QCardActions',
        'QForm',
        'QCard',
        'QCardSection',
        'QField',
        'QList',
        'QItem',
        'QSlider'
      ],
      plugins: ['Notify', 'Dialog']
    }
  }
}
