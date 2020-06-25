Quasar App Extension - Http Authentication
===

This app extension provides http authentication functionality by using a Vuex store.

# Dependencies
Both axios as well as Vuex are required for this extension.

# Install
```bash
quasar ext add http-authentication
```
Quasar CLI will retrieve it from NPM and install the extension.

## Prompts

The installation prompts for the routes which should be used to communicate with the backend. The requests and responses of the server should match with this extension.

There are multiple authentication schemes (https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication). This app extension was originally created for the `Bearer` scheme.

## Layout

The extension comes with a basic menu for login, register and logout actions. Have a look at the test app.

## Functionality

The authentication logic is performed inside a Vuex store. `this.$auth` provides a helper to access the functionality in the store.

| Function              | Functionality |
| ---------             | ------------- |
| $auth.register(data)  | Makes a POST request to the registration route with `data` as body |
| $auth.login(data)     | Makes a POST request to the login route with `data` as body. Saves the returned `token` in a cookie       |
| $auth.logout()        | Logs out the current user and removes the Authorixation cookie     |
| $auth.verify(token)   | Makes a GET request to the verification route with `token` as URL parameter |
| $auth.passwordForgot(data) | Makes a POST request to the password forgot route with `data` as body. |
| $auth.passwordReset(data)  | Makes a POST request to the password reset route with `data` as body.  |
| $auth.loggedIn()      | Returns a boolean to determine if the user is logged in.                    |
| auth.check(roles)     | Checks if the user belongs to `roles` by checking if they are included in `user.roles`. |
| $auth.setToken(token) | Sets the Authorization header depending on the used scheme.                 |
| $auth.fetch()         | Fetch the user belonging to the Authorization token from the backend        |
| $auth.user()          | Returns the current user.                                                   |

If you require the `user` object to have a specific structure or you need to perform an action upon logging in you can use the following in the prefetch function of App.vue:
```js
/**
 * Custom user data
 */
store.commit('auth/setUserData', (data) => { return { id: data.id } })

/**
 * Login callbacks
 */
store.commit('auth/addLoginCallback', () => console.log('Custom login calback'))
```
Have a look at the pages to see how the functions are used internally.

# Notes
Note that an existing axios boot file will be overwritten. If you require support for additional http authentication schemes, please open an issue.

Currently both a .ts and .js file is rendered into your app. You will have to delete the one which is not used in your application.

# Uninstall
```bash
quasar ext remove http-authentication
```

# Contribute
PR's for extra languages are appreciated (src/components/lang).

# Donate
If you appreciate the work that went into this App Extension, please consider [donating to Quasar](https://donate.quasar.dev).
