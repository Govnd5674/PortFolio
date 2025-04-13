import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { VitePWA } from "vite-plugin-pwa";
import imagemin from "vite-plugin-imagemin";

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
                maxAgeSeconds: 60 * 60 * 24 * 7, // 1 week
              },
            },
          },
        ],
      },
    }),
    imagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 60,
      },
      pngquant: {
        quality: [0.7, 0.8],
        speed: 4,
      },
      svgo: {
        plugins: [
          { name: "removeViewBox" },
          { name: "removeEmptyAttrs", active: false },
        ],
      },
    }),
  ],
  assetsInclude: ["**/*.glb"], // Add GLB files to assets
  build: {
    sourcemap: false,
    minify: "terser",
    cssMinify: true,
    rollupOptions: {
      external: [/\.glb$/], // Exclude GLB files from being processed
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          animations: ["framer-motion"],
          utils: ["gl-matrix"],
          icons: ["react-icons"],
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion"],
  },
});
