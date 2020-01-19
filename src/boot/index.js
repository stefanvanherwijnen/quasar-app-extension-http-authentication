/* eslint-disable */

function isArrayOrString (variable) {
  if (typeof variable === typeof [] || typeof variable === typeof '') {
    return true
  }
  return false
}
import auth from 'auth-token-based/store'

export default ({ app, router, store, Vue }) => {
  /**
   * Register auth store
   */
  store.registerModule('auth', auth)

  /**
    * Set route guard
    */
  router.beforeEach((to, from, next) => {
    const record = to.matched.find(record => record.meta.auth)
    if (record) {
      store.dispatch('auth/fetch').then(() => {
        if (!store.getters['auth/loggedIn']) {
          router.push('/')
        } else if (
          isArrayOrString(record.meta.auth) &&
          !store.getters['auth/check'](record.meta.auth)
        ) {
          router.push('/account')
        }
      }).catch(err => {
        console.error(err)
        router.push('/')
      }).finally(() => {
        next()
      })
    } else {
      next()
    }
  })

  /**
  * Set authentication routes
  */
  let { routes } = router.options
  let routeData = routes.find(r => r.path === '/')
  routeData.children = [
    {
      path: '/login',
      name: 'login',
      component: () => import('auth-token-based/pages/Login')
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('auth-token-based/pages/Logout')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('auth-token-based/pages/Register')
    },
    {
      path: '/verification',
      name: 'verification',
      component: () => import('auth-token-based/pages/Verification')
    },
    {
      path: '/password',
      name: 'password',
      component: { render: h => h('router-view') },
      children: [
        {
          path: 'forgot',
          name: 'forgot',
          component: () => import('auth-token-based/pages/password/Forgot')
        },
        {
          path: 'reset',
          name: 'reset',
          component: () => import('auth-token-based/pages/password/Reset')
        }
      ]
    }
  ]

  router.addRoutes([routeData])

  app.mounted = () => {
    store.dispatch('auth/fetch').catch(() => {
      store.dispatch('auth/logout')
    })
  }

  var helper = {}
  helper.register = (data) => { return store.dispatch('auth/register', data) }
  helper.loggedIn = () => { return store.getters['auth/loggedIn'] }
  helper.check = (roles) => { return store.getters['auth/check'](roles) }
  helper.login = async (data) => { return store.dispatch('auth/login', data) }
  helper.setToken = (token) => { return store.dispatch('auth/setToken', token) }
  helper.logout = () => { return store.dispatch('auth/logout') }
  helper.verify = (token) => { return store.dispatch('auth/verify', token) }
  helper.passwordForgot = (data) => { return store.dispatch('auth/passwordForgot', data) }
  helper.passwordReset = (data) => { return store.dispatch('auth/passwordReset', data) }
  helper.fetch = () => { return store.dispatch('auth/fetch') }
  helper.user = () => { return store.getters['auth/user'] }
  Vue.prototype.$auth = helper

  store.commit('auth/addLoginCallback', () => console.log('Logged in'))

}
