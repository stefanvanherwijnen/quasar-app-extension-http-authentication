[![npm](https://img.shields.io/npm/v/quasar-ui-http-authentication.svg?label=quasar-ui-http-authentication)](https://www.npmjs.com/package/quasar-ui-http-authentication)
[![npm](https://img.shields.io/npm/dt/quasar-ui-http-authentication.svg)](https://www.npmjs.com/package/quasar-ui-http-authentication)

# Usage

## Quasar CLI project

Install the [App Extension](../app-extension).

## Import directly

Make sure your Quasar app is setup correctly.

```js
import {
  LoginComponent,
  RegisterComponent,
  PasswordResetComponent,
  PasswordForgotComponent,
} from "quasar-ui-http-authentication";

export default defineComponent({
  components: {
    LoginComponent,
    // any other components you wish to use
  },
});
```

# Donate

If you appreciate the work that went into this, please consider [donating to Quasar](https://donate.quasar.dev).

# License

MIT (c) Stefan van Herwijnen
