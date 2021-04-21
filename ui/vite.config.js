import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { readFile } from 'fs/promises'
const version = JSON.parse(await readFile(new URL('./package.json', import.meta.url))).version

export default defineConfig({
  define: {
    __UI_VERSION__: JSON.stringify(version)
  },
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      sass: { 
         additionalData: `@import "quasar/src/css/index"`
     },
    },
  },
  build: {
    lib: {
      // UMD not supported for code-splitting builds
      formats: ['es'],
      entry: './src/index.ts'
    },
    rollupOptions: {
      external: ['vue','quasar'],
      // output: {
      //   globals: {
      //     vue: 'Vue',
      //     quasar: 'Quasar'
      //   }
      // }
    }
  }
})
