import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   resolve: {
    //配置别名
    alias: {
      '@': '/src',
      'components': '/src/components',
      'styles': '/src/styles',
      'assets': '/src/assets',
    },
    //导入时想要省略的扩展名列表
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']//这里用了默认值，可以不写
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: orange;`,
      },
    },
  },
})
