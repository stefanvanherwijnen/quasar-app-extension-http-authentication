/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */
const path = require('path')

const extendWithComponent = (conf) => {
  conf.boot.push('~quasar-app-extension-http-authentication/src/boot/index.js')

  conf.build.transpileDependencies.push(/quasar-app-extension-http-authentication[\\/]src/)

  const requiredPlugins = ['Notify', 'Dialog', 'Cookies']

  requiredPlugins.forEach(plugin => {
    if (!conf.framework.plugins.includes(plugin)) {
      conf.framework.plugins.push(plugin)
    }
  })

  conf.preFetch = true

  console.log('App Extension (http-authentication) Info: \'Adding http-authentication boot reference to your quasar.conf.js\'')
}

const chainWebpack = (ctx, chain) => {
  chain.resolve.alias
    .set('http-authentication', path.resolve(__dirname, './components'))
}

module.exports = function (api) {
  api.compatibleWith('@quasar/app', '^1.0.0 || ^2.0.0')

  api.chainWebpack((chain) => chainWebpack(api.ctx, chain))

  api.extendQuasarConf(extendWithComponent)
}
