Quasar App Extension - Auth Token Based
===

This app extension provides token based authentication functionality.

![screenshot](https://raw.githubusercontent.com/stefanvanherwijnen/quasar-app-extension-auth-token-based/master/image.png)

# Dependencies
Both axios as well as vuex are required for this extension.

# Install
```bash
quasar ext add auth-token-based
```
Quasar CLI will retrieve it from NPM and install the extension.

## Prompts

The installation prompts for the routes which should be used to communicate with the backend. The requests and responses of the server should match with this extension.

## Layout

The extension comes with a basic menu for login, register and logout actions. Have a look at the test app.

## Functionality

The authentication logic is performed inside a Vuex store. `this.$auth` provides a helper to access the functionality in the store.

# Notes
Note that an existing axios boot file will be overwritten. You can add your own login callbacks and change the format of the user data as is provided by your backend. Have a look at App.vue in the test app.

# Uninstall
```bash
quasar ext remove auth-token-based
```

# Contribute
PR's for extra languages are appreciated (src/components/lang).

# Donate
If you appreciate the work that went into this App Extension, please consider [donating to Quasar](https://donate.quasar.dev).
