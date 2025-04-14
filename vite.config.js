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
                maxAgeSeconds: 60 * 60 * 24 * 7, // 1 week
              },
            },
          },
        ],
        maximumFileSizeToCacheInBytes: 8000000, // Increased to 8MB
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
  base: "/PortFolio",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    minify: "terser",
    cssMinify: true,
    chunkSizeWarningLimit: 1000, // Updated warning limit
    rollupOptions: {
      external: [/\.glb$/], // Exclude GLB files from being processed
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) {
              if (id.includes("react-dom")) return "react-dom";
              return "react-core";
            }
            if (id.includes("three")) {
              if (id.includes("drei")) return "three-drei";
              if (id.includes("fiber")) return "three-fiber";
              return "three-core";
            }
            if (id.includes("framer-motion")) return "animations-framer";
            if (id.includes("@react-spring")) return "animations-spring";
            if (id.includes("gsap")) return "animations-gsap";
            return "vendor";
          }
          if (id.includes("pages/")) {
            return `page-${id.split("pages/")[1].split(".")[0].toLowerCase()}`;
          }
        },
        inlineDynamicImports: false,
        experimentalMinChunkSize: 10000,
      },
    },
    target: "esnext",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log"],
        passes: 3,
        dead_code: true,
        unsafe: true,
      },
      mangle: {
        toplevel: true,
        properties: {
          regex: /^_/,
        },
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion"],
  },
  assetsInclude: ["**/*.glb"], // Add GLB files to assets
});
