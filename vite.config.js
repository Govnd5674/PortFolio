import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/**/*.glb',
          dest: 'assets'
        }
      ]
    })
  ],
  assetsInclude: ['**/*.glb'], // Add GLB files to assets
  build: {
    rollupOptions: {
      external: [/\.glb$/] // Exclude GLB files from being processed
    }
  }
})