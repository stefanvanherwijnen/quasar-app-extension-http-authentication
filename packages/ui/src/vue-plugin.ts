import LoginComponent from './components/LoginComponent.vue'
import RegisterComponent from './components/RegisterComponent.vue'
import PasswordForgotComponent from './components/PasswordForgotComponent.vue'
import PasswordResetComponent from './components/PasswordResetComponent.vue'
import VerificationSlider from './components/VerificationSlider.vue'
import ConsentComponent from './components/ConsentComponent.vue'

import { loadLang } from './lang'

// const version = __UI_VERSION__

function install (app: any, options: { lang: string }) {
  loadLang(options?.lang || 'en-us')
  app.component(LoginComponent.name, LoginComponent)
  app.component(RegisterComponent.name, RegisterComponent)
  app.component(PasswordForgotComponent.name, PasswordForgotComponent)
  app.component(PasswordResetComponent.name, PasswordResetComponent)
  app.component(VerificationSlider.name, VerificationSlider)
  app.component(ConsentComponent.name, ConsentComponent)

}

export {
  // version,
  install
}
