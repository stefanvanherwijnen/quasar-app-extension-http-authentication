// Auto generates routes from vue files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
const pages = import.meta.glob('../pages/*.vue')

const routes = [
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: Object.keys(pages).map((path) => {
      const name = path.match(/\.\/pages(.*)\.vue$/)[1].toLowerCase()
      return {
        name,
        path: name === 'home' ? '/' : name,
        component: pages[path] // () => import('./pages/*.vue')
      }
    })
  }
]

// const routes = Object.keys(pages).map((path) => {
//   const name = path.match(/\.\/pages(.*)\.vue$/)[1].toLowerCase()
//   return {
//     path: name === '/home' ? '/' : name,
//     component: pages[path] // () => import('./pages/*.vue')
//   }
// })

export default routes
