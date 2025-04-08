import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  base: '/psalms-websit/', // Moved to root level - ALWAYS use this for GitHub Pages
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~': resolve(__dirname, './src'),
    },
    extensions: ['.js', '.vue', '.json'],
  },
})
