import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { readFile } from 'fs/promises'
import { dirname, basename, resolve, join, normalize, sep } from 'path'
const version = JSON.parse(
  await readFile(new URL('./package.json', import.meta.url))
).version
// import { QuasarPlugin } from '@stefanvh/quasar-app-vite'
// import { getAppPaths } from '@stefanvh/quasar-app-vite/lib/app-paths'
import { existsSync } from 'fs'

// const appPaths = await getAppPaths(resolve('dev'))

// function getQuasarDir () {
//   let dir = process.cwd()

//   while (dir.length && dir[dir.length - 1] !== sep) {
//     if (existsSync(join(dir, 'node_modules', 'quasar'))) {
//       return join(dir, 'node_modules', 'quasar')
//     }

//     dir = normalize(join(dir, '..'))
//   }
// }

export default defineConfig(async ({ command, mode }) => ({
  define: {
    __UI_VERSION__: JSON.stringify(version)
  },
  plugins: [
    vue()
    // await QuasarPlugin({
    //   appPaths,
    //   loadQuasarConf: true
    // })
  ],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "quasar/src/css/index"`
      }
    }
  },
  // resolve: {
  //   alias: [
  //     { find: 'quasar', replacement: getQuasarDir() },
  //     { find: 'quasar/src', replacement: join(getQuasarDir(), 'src') },
  //   ]
  // },
  build: {
    minify: false,
    // target: 'esnext',
    lib: {
      // UMD not supported for code-splitting builds
      formats: ['es'],
      entry: './src/index.ts'
    },
    rollupOptions: {
      external: ['vue', 'vue-router', 'quasar']
      // output: {
      //   globals: {
      //     vue: 'Vue',
      //     quasar: 'Quasar'
      //   }
      // }
    }
  }
}))
