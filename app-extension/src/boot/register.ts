// @ts-ignore
// import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-http-authentication'

const boot = (({ app }: { app: any }) => {
  console.log("Registering http-authentication'")
  app.use(VuePlugin)
})

export default boot