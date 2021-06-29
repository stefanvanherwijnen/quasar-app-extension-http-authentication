# Quasar App Extension http-authentication

> UI authentication components for Quasar framework

[![npm](https://img.shields.io/npm/v/quasar-app-extension-http-authentication.svg?label=quasar-app-extension-http-authentication)](https://www.npmjs.com/package/quasar-app-extension-http-authentication)
[![npm](https://img.shields.io/npm/dt/quasar-app-extension-http-authentication.svg)](https://www.npmjs.com/package/quasar-app-extension-http-authentication)

# v1 users
**v2 is not compatible with v1**

v2 is completely rewritten and is now backend agnostic and places the pages into your app. You have to add routes to the pages manually, e.g.:
```js
{ path: '/login', component: () => import('pages/auth/Login.vue') },
{ path: '/register', component: () => import('pages/auth/Register.vue') },
{ path: '/password/forgot', component: () => import('pages/auth/PasswordForgot.vue') },
{ path: '/password/reset', component: () => import('pages/auth/PasswordReset.vue') },
{ path: '/verification', component: () => import('pages/auth/Verification.vue') },
```

In addition, you have to change the authentication logic in `auth.ts` to communicate with your backend. You probably have to replace the promises with axios requests, but you could also use Apollo for example.

# Install
```bash
quasar ext add http-authentication
```
Quasar CLI will retrieve it from NPM and install the extension.

Upon installation you will have a `src/pages/auth` folder which contains all authentication pages. Do not forget to modify `auth.ts` to correctly communicate with your backend.

# Uninstall
```bash
quasar ext remove http-authentication
```

# Info
## Backend agnostic
This app extension now only provides the following components which you can use in your app in any way you want:
LoginComponent, RegisterComponent, PasswordResetComponent, PasswordForgotComponent

## Store
`quasar-ui-http-authentication` exports a reactive user object which could be used to store your user data. You can also use your own store or Vuex if you change your authentication logic appropriately.

## Helper functions
`quasar-ui-http-authentication` exports multiple helper functions for getting/setting cookies and opening dialogs. See [helpers.ts](../ui/src/utils/helpers.ts).

# Donate
If you appreciate the work that went into this App Extension, please consider [donating to Quasar](https://donate.quasar.dev).

# License
MIT (c) Stefan van Herwijnen
