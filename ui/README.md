# Component MyComponent

[![npm](https://img.shields.io/npm/v/quasar-ui-http-authentication.svg?label=quasar-ui-http-authentication)](https://www.npmjs.com/package/quasar-ui-http-authentication)
[![npm](https://img.shields.io/npm/dt/quasar-ui-http-authentication.svg)](https://www.npmjs.com/package/quasar-ui-http-authentication)

# Usage

## Quasar CLI project

Install the [App Extension](../app-extension).

**OR**:

Create and register a boot file:

```js
import { boot } from 'quasar/wrappers'
import Plugin from 'quasar-ui-http-authentication'

export default boot(({ app }: { app: any }) => {
  app.use(Plugin)
})
```

**OR**:

```html
<script>
import {
  LoginComponent,
  RegisterComponent,
  PasswordResetComponent,
  PasswordForgotComponent
} from 'quasar-ui-http-authentication'

export default {
  components: {
    LoginComponent,
    RegisterComponent,
    PasswordResetComponent,
    PasswordForgotComponent
  }
}
</script>
```

## Vue project

```js
import { createApp } from 'vue'
import { Quasar } from 'quasar'
import Plugin from 'quasar-ui-http-authentication'

const app = createApp(App)

app.use(Quasar, {
  // ...config
})
app.use(Plugin)
```

**OR**:

```html
<script>
import {
  LoginComponent,
  RegisterComponent,
  PasswordResetComponent,
  PasswordForgotComponent
} from 'quasar-ui-http-authentication'

export default {
  components: {
    LoginComponent,
    RegisterComponent,
    PasswordResetComponent,
    PasswordForgotComponent
  }
}
</script>
```

# Setup
```bash
$ yarn
```

# Developing
```bash
# start dev in SPA mode
$ yarn dev
```

# Building package
```bash
$ yarn build
```

# Adding Testing Components
In the `ui/dev/pages` you can add Vue files to test your component/directive. When using `yarn dev` to build the UI, any pages in that location will automatically be picked up by dynamic routing and added to the test page.

# Adding Assets
Assets like language or icon-sets should be dynamically imported with `import()`. Vite will resolve these imports when building.

# Donate
If you appreciate the work that went into this, please consider [donating to Quasar](https://donate.quasar.dev).

# License
MIT (c) Stefan van Herwijnen