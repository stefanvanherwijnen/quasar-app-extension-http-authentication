import LoginComponent from './components/LoginComponent.vue'
import RegisterComponent from './components/RegisterComponent.vue'
import PasswordForgotComponent from './components/PasswordForgotComponent.vue'
import PasswordResetComponent from './components/PasswordResetComponent.vue'

import { loadLang } from './lang'

export * from './utils/helpers'
// const version = __UI_VERSION__

function install (app: any, options: { lang: string }) {
  loadLang(options?.lang || 'en-us', app)
  app.component(LoginComponent.name, LoginComponent)
  app.component(RegisterComponent.name, RegisterComponent)
  app.component(PasswordForgotComponent.name, PasswordForgotComponent)
  app.component(PasswordResetComponent.name, PasswordResetComponent)
}

export {
  // version,
  loadLang,
  LoginComponent,
  RegisterComponent,
  PasswordForgotComponent,
  PasswordResetComponent,
  install
}