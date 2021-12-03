/**
 * Quasar App Extension install script
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/install-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/InstallAPI.js
 */

// import { InstallAPI } from '@quasar/app'

const install = function (api: any) {
  api.compatibleWith('quasar', '^2.0.0-beta.12')
  api.compatibleWith('@quasar/app', '^3.0.0-beta.11')

  api.render('./templates')

  console.log('Do not forget to add the corresponding routes to your routes file.')

}

export = install