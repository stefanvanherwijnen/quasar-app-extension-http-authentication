/**
 * Quasar App Extension prompts script
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/prompts-api
 *
 * Inquirer prompts
 * (answers are available as "api.prompts" in the other scripts)
 * https://www.npmjs.com/package/inquirer#question
 *
 */

module.exports = function () {
  return [
    {
      name: 'baseUrl',
      type: 'input',
      required: true,
      message: 'URL of API server',
      default: 'http://127.0.0.1:3000'
    },
    {
      name: 'registerRoute',
      type: 'input',
      required: true,
      message: 'Route for user registration',
      default: '/auth/register'
    },
    {
      name: 'verificationRoute',
      type: 'input',
      required: true,
      message: 'Route for user verification',
      default: '/auth/verify'
    },
    {
      name: 'loginRoute',
      type: 'input',
      required: true,
      message: 'Route for user login',
      default: '/auth/login'
    },
    {
      name: 'passwordForgotRoute',
      type: 'input',
      required: true,
      message: 'Route for forgotten password request',
      default: '/auth/password/forgot'
    },
    {
      name: 'passwordResetRoute',
      type: 'input',
      required: true,
      message: 'Route to reset password',
      default: '/auth/password/reset'
    },
    {
      name: 'fetchUserRoute',
      type: 'input',
      required: true,
      message: 'Route to fetch authenticated user',
      default: '/auth/user'
    }
  ]
}

