import * as VuePlugin from './vue-plugin'
import LoginComponent from './components/LoginComponent.vue'
import RegisterComponent from './components/RegisterComponent.vue'
import PasswordForgotComponent from './components/PasswordForgotComponent.vue'
import PasswordResetComponent from './components/PasswordResetComponent.vue'
import ConsentComponent from './components/ConsentComponent.vue'
import VerificationSlider from './components/VerificationSlider.vue'

// export * from './vue-plugin'

export * from './utils/helpers'
export * from './lang'
export {
  LoginComponent,
  RegisterComponent,
  PasswordForgotComponent,
  PasswordResetComponent,
  ConsentComponent,
  VerificationSlider
}

export default VuePlugin
