import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { VitePWA } from "vite-plugin-pwa";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "src/assets/**/*.glb",
          dest: "assets",
        },
      ],
    }),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "Your Portfolio",
        short_name: "Portfolio",
        description: "Your Portfolio Website",
        theme_color: "#030712",
        background_color: "#030712",
        display: "standalone",
        icons: [
          {
            src: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/raw\.githubusercontent\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "github-images",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 7,
              },
            },
          },
        ],
        maximumFileSizeToCacheInBytes: 10000000,
        globPatterns: ["**/*.{js,css,html,ico,png,svg,woff2}"],
      },
    }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
          },
          {
            name: "removeEmptyAttrs",
            active: false,
          },
        ],
      },
    }),
  ],
  base: '',  // Change from "/" to empty string
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: true, // Enable sourcemaps for debugging
    minify: "terser",
    cssMinify: true,
    chunkSizeWarningLimit: 5000, // 5MB chunk size limit
    rollupOptions: {
      input: {
        main: "./index.html",
      },
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split(".");
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        entryFileNames: "assets/[name]-[hash].js",
        inlineDynamicImports: true, // Change to true for single bundle
        manualChunks: undefined // Remove manual chunks
      },
    },
    assetsInlineLimit: 4096,
  },
  resolve: {
    alias: {
      "@assets": "/src/assets",
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion"],
  },
  assetsInclude: ["**/*.glb"], // Add GLB files to assets
});
