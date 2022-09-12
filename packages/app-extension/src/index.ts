/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

// import { IndexAPI } from '@quasar/app'

function extendConf(conf: any) {
  // register our boot file
  conf.boot.push('~quasar-app-extension-http-authentication/boot')

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
  const plugins = ['Dialog', 'Notify', 'Cookies']
  conf.framework.components.push(...components)
  conf.framework.plugins.push(...plugins)
}

function index(api: any) {
  api.extendQuasarConf(extendConf)
}

export default index
