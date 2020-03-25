/**
 * Quasar App Extension install script
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/install-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/InstallAPI.js
 */

module.exports = function (api) {
  console.log('This extension has been renamed to (quasar-app-extension-)http-authentication. Please switch to the new package.')

  api.compatibleWith('quasar', '^1.0.0')
  api.compatibleWith('@quasar/app', '^1.0.0')

  if (!api.hasPackage('validator')) {
    api.extendPackageJson({
      dependencies: {
        validator: '^12.1.0'
      }
    })
  }

  api.render('./templates', {
    prompts: api.prompts
  })
}
