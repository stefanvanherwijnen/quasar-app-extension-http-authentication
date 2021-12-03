[![npm](https://img.shields.io/npm/v/quasar-ui-http-authentication.svg?label=quasar-ui-http-authentication)](https://www.npmjs.com/package/quasar-ui-http-authentication)
[![npm](https://img.shields.io/npm/dt/quasar-ui-http-authentication.svg)](https://www.npmjs.com/package/quasar-ui-http-authentication)

# Usage

## Quasar CLI project

Install the [App Extension](../app-extension).

## Vue Plugin

```js
...
// setup Vue app
...
import VuePlugin from "quasar-ui-http-authentication";
app.use(VuePlugin)
```

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

You can now use the components in the template.

## Language

You can change the language used with `loadLang`:

```js
import { loadLang } from "quasar-ui-http-authentication";

loadLang("nl");
```

## Helper functions

Functions to open dialogs, set cookies etc can also be imported:

```js
import { useLang, verificationRequiredDialog } from 'quasar-ui-http-authentication'
import { useQuasar } from 'quasar'
...
setup () {
  const lang = useLang()
  const $q = useQuasar()
  verificationRequiredDialog($q, {}, lang)
}
```

# Donate

If you appreciate the work that went into this, please consider [donating to Quasar](https://donate.quasar.dev).

# License

MIT (c) Stefan van Herwijnen
