import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { QuasarResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig(async ({ command, mode }) => ({
  plugins: [
    vue(),
    Components({
      resolvers: [QuasarResolver()]
    })
  ],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "quasar/src/css/index"`
      }
    }
  },
  build: {
    // minify: false,
    lib: {
      // UMD not supported for code-splitting builds
      formats: ['es'],
      entry: './src/index.ts'
    },
    emptyOutDir: true,
    rollupOptions: {
      external: ['vue', 'vue-router', 'quasar']
    }
  }
}))
