import { defineLang } from '../lang'

export default defineLang({
  lang: 'nl',
  auth: {
    submit: 'Versturen',
    ok: 'Ok',
    cancel: 'Cancel',
    myAccount: 'Mijn account',
    navigation: 'Navigatie',
    fields: {
      email: 'Email',
      username: 'Gebruikersnaam',
      password: 'Wachtwoord',
      repeatPassword: 'Herhaal wachtwoord'
    },
    login: {
      login: 'Inloggen',
      passwordForgot: 'Wachtwoord vergeten?',
      verificationRequired:
        'Controleer a.u.b. uw email en verifieer eerst uw account',
      invalidCredentials: 'Email adres of wachtwoord is incorrect',
      rememberMe: 'Onthoud mij',
      registerMessage: 'Heeft u nog geen account aangemaakt?',
      register: 'Registreer hier.',
      createAccount: 'Account aanmaken',
    },
    consent: {
      message: (name: string) => `${name} is requesting access to your data.`,
      deny: 'deny',
      allow: 'allow'
    },
    register: {
      register: 'Registreren',
      invalidData:
        'Server kon het verzoek niet verwerken. Verzend a.u.b. geldige data.',
      alreadyRegistered:
        'Email adres is al geregistreerd. Controleer uw email voor verificatie.',
      accountCreated:
        'Controleer uw email om uw registratie te bevestigen. Dit kan soms tot 10 minuten in beslag nemen. Controleert u ook de ongewenste email.',
      checkEmail: (email: string) => `U wilt zich registreren met email adres: <b>${email}</b>, is dit correct?`,
      error: 'Er ging iets mis.'
    },
    verification: {
      success: 'Uw account is geverifieerd. U kunt nu inloggen.',
      failed: 'Verificatie mislukt of account is al geverifieerd. Probeert u in te loggen.',
      slider: 'Sleep a.u.b. de onderstaande balk helemaal naar rechts tot deze groen wordt.'
    },
    logout: {
      confirmation: 'Weet u zeker dat u wilt uitloggen?',
      confirm: 'Bevestig',
      logout: 'Uitloggen',
      cancel: 'Annuleren'
    },
    password: {
      forgot: {
        header: 'Nieuw wachtwoord aanvragen.',
        checkEmail: 'Controleer a.u.b. uw email om een nieuw wachtwoord in te stellen. Mocht u geen email ontvangen, controleer dan of uw email adres wel geregistreerd is.',
        unknownEmail: 'Email adres is niet geregistreerd.'
      },
      reset: {
        header: 'Wijzig uw wachtwoord',
        success:
          'Uw wachtwoord is gewijzigd. U kunt nu inloggen met het nieuwe wachtwoord.'
      }
    },
    validations: {
      required: 'Veld is vereist.',
      passwordLength: (length: string | number) => `Het wachtwoord moet minimaal ${length} tekens lang zijn.`,
      passwordMatch: 'Wachtwoorden komen niet overeen.',
      email: 'Ongeldig email adres.',
      username: 'Een gebruikersnaam mag alleen alphanumerieke tekens bevatten.'
    }
  }
})