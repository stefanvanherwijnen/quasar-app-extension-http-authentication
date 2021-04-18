// @ts-ignore
import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-http-authentication/src/index'

export default boot(({ app }: { app: any }) => {
  app.use(VuePlugin)
})