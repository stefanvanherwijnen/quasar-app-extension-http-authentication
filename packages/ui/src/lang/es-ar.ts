import { Language } from "../lang"

const lang: Language = {
  lang: 'es-ar',
  auth: {
    submit: 'Enviar',
    ok: 'Ok',
    cancel: 'Cancel',
    myAccount: 'Mi cuenta',
    navigation: 'Navegación',
    fields: {
      email: 'Email',
      username: 'Nombre de Usuario',
      password: 'Contraseña',
      repeatPassword: 'Confirmar contraseña'
    },
    login: {
      login: 'Iniciar sesión',
      passwordForgot: '¿Olvido su contraseña?',
      verificationRequired:
        'Debe verificar su cuenta. Revise su email para verificar la misma.',
      invalidCredentials: 'Su email o contraseña son incorrectos.',
      rememberMe: 'Recuérdame',
      registerMessage: '¿Aún no ha creado una cuenta?',
      register: 'Registrarse.',
      createAccount: 'Create account'
    },
    consent: {
      message: (name: string) => `${name} is requesting access to your data.`,
      deny: 'Deny',
      allow: 'Allow'
    },
    register: {
      register: 'Registrarse',
      invalidData:
        'El servidor no pudo procesar la solicitud. Corrija los datos enviados.',
      alreadyRegistered:
        'El email ingresado ya se encuentra registrado. Por favor revise su email.',
      accountCreated:
        'Por favor revise su email para verificar su registro. A veces, esto puede tardar hasta 10 minutos. Compruebe la carpeta de correo no deseado si no ha recibido el email.',
      checkEmail: (email) => `Quiere registrarse con el siguiente email ${email}, ¿esto es correcto?`,
      error: 'Algo salió mal.'
    },
    verification: {
      success: 'Tu cuenta ha sido verificada. Ahora puede iniciar sesión.',
      failed: 'La verificación ha fallado o la cuenta ya ha sido verificada. Intente iniciar sesión.',
      slider: 'Please drag the slider all the way to the right until it turns green.'
    },
    logout: {
      confirmation: '¿Está seguro de que desea cerrar la sesión?',
      confirm: 'Confirmar',
      logout: 'Cerrar sesión',
      cancel: 'Cancelar'
    },
    password: {
      forgot: {
        header: 'Solicitar nueva contraseña',
        checkEmail: 'Por favor revise su email para restablecer su contraseña. Si no recibe el email, asegúrese de que su dirección de email esté registrada o sea la correcta.',
        unknownEmail: 'La dirección de email ingresada no se encuentra registrada.'
      },
      reset: {
        header: 'Restablecer su contraseña',
        success:
          'Tu contraseña ha sido restablecida. Ahora puede iniciar sesión con la nueva contraseña.'
      }
    },
    validations: {
      required: 'Campo requerido.',
      passwordLength: (length: string | number) => `La longitud mínima de la contraseña es de ${length} caracteres.`,
      passwordMatch: 'Las contraseñas no son iguales.',
      email: 'Se requiere una dirección de email válida.',
      username: 'El nombre de usuario solo puede contener caracteres alfanuméricos.'
    }
  }
}

export default lang