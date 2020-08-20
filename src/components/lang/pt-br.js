export default {
  auth: {
    submit: 'Enviar',
    myAccount: 'Minha conta',
    navigation: 'Navegação',
    fields: {
      email: 'Email',
      username: 'usuário',
      password: 'Senha',
      repeatPassword: 'Repetir senha'
    },
    login: {
      login: 'Acessar',
      passwordForgot: 'Esqueceu sua senha?',
      verificationRequired:
        'Favor acessar seu email e validar sua conta primeiro..',
      invalidCredentials: 'Endereço de email ou senha estão incorretos.',
      rememberMe: 'Lembre de mim',
      registerMessage: 'Você ainda não criou uma conta?',
      register: 'Cadastre-se aqui.'
    },
    register: {
      register: 'Cadastro',
      invalidData:
        'Servidor não conseguiu processar seu pedido. Favor corrigir os dados e tentar novamente.',
      alreadyRegistered:
        'Endereço de email já cadastrado. Favor verificar seu email para validar o cadastro.',
      accountCreated:
        'Favor verificar seu email para validar o cadastro. As vezes este processo pode levar até 10 minutos. Favor verificar sua caixa de spam caso ainda não recebeu o email.',
      checkEmail: (email) => `Favor confirmar se o endereço de email ${email} está correto.`,
      error: 'Algo deu errado.'
    },
    verification: {
      success: 'Sua conta foi verificada e você pode agora fazer o login.',
      failed: 'Verificação da conta falhou ou a conta já foi verificada. Tente fazer o login.'
    }, 
    logout: {
      confirmation: 'Tem certeza que deseja sair?',
      confirm: 'Confirmar',
      logout: 'Sair',
      cancel: 'Cancelar'
    },
    password: {
      forgot: {
        header: 'Requisitar uma nova senha',
        checkEmail: 'Favor verificar seu email para resetar sua senha. Caso não receber um email, certifique-se que você já está cadastrado tentando realizar um novo cadastro.',
        unknownEmail: 'Endereço de email não está cadastrado.'
      },
      reset: {
        header: 'Resetar senha',
        success:
          'Sua senha foi gerada novamente. Você agora pode fazer o login com sua nova senha.'
      }
    },
    validations: {
      required: 'Campo obrigatório.',
      passwordLength: (length) => `O comprimento mínimo da senha é de ${length} caracteres.`,
      passwordMatch: 'Senhas não conferem.',
      email: 'Um endereço de email válido é obrigatório.',
      username: 'O nome de usuário pode apenas conter caracters alfanuméricos.'
    }
  }
}
