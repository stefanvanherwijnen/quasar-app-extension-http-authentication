export default {
  auth: {
    submit: 'Versturen',
    myAccount: 'Mijn account',
    navigation: 'Navigatie',
    email: 'Email',
    login: {
      login: 'Inloggen',
      passwordForgot: 'Wachtwoord vergeten?',
      verificationRequired:
        'Controleer a.u.b. uw email en verifieer eerst uw account',
      invalidCredentials: 'Email adres of wachtwoord is incorrect',
      email: 'Email',
      password: 'Wachtwoord',
      rememberMe: 'Onthoud mij',
      registerMessage: 'Heeft u nog geen account aangemaakt?',
      register: 'Registreer hier.'
    },
    register: {
      register: 'Registreren',
      invalidData:
        'Server kon het verzoek niet verwerken. Verzend a.u.b. geldige data.',
      alreadyRegistered:
        'Email adres is al geregistreerd. Controleer uw email voor verificatie.',
      accountCreated:
        'Controleer uw email om uw registratie te bevestigen. Dit kan soms tot 10 minuten in beslag nemen. Controleert u ook de ongewenste email.',
      name: 'Naam',
      password: 'Wachtwoord',
      repeatPassword: 'Herhaal wachtwoord',
      checkEmail: (email) => `U wilt registreren met email adres: ${email}, is dit correct?`,
      error: 'Er ging iets mis.'
    },
    verification: {
      success: 'Uw account is geverifieerd, u kunt nu inloggen.',
      failed: 'Verificatie mislukt of account is al geverifieerd. Probeert u in te loggen.'
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
      passwordLength: (length) => `Het wachtwoord moet minimaal ${length} tekens lang zijn.`,
      passwordMatch: 'Wachtwoorden komen niet overeen.',
      email: 'Ongeldig email adres.'
    }
  }
}
