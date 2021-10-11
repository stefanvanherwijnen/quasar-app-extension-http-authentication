/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

// import { IndexAPI } from '@quasar/app'

function extendConf (conf: any) {
  // register our boot file
  conf.boot.push('~quasar-app-extension-http-authentication/src/boot/register.ts')

  const components = [
    'QCardSection',
    'QInput',
    'QIcon',
    'QCheckbox',
    'QBtn',
    'QCardActions',
    'QForm',
    'QCard',
    'QCardSection',
    'QField'
  ]
  conf.framework.components.push(...components)

  // make sure app extension files & ui package gets transpiled
  conf.build.transpileDependencies.push(/quasar-app-extension-http-authentication[\\/]src/)
}

export default function (api: any) {
  // Quasar compatibility check; you may need
  // hard dependencies, as in a minimum version of the "quasar"
  // package or a minimum version of "@quasar/app" CLI
  api.compatibleWith('quasar', '^2.0.0-beta.12')
  api.compatibleWith('@quasar/app', '^3.0.0-beta.11')

  // Uncomment the line below if you provide a JSON API for your component
  // api.registerDescribeApi('MyComponent', '~quasar-ui-http-authentication/src/components/MyComponent.json')

  // We extend /quasar.conf.js
  api.extendQuasarConf(extendConf)
}