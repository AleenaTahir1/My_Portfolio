import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/My_Portfolio/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Optimize chunk splitting for better performance
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name]-[hash].js`,
        chunkFileNames: `assets/[name]-[hash].js`,
        assetFileNames: `assets/[name]-[hash].[ext]`,
        // Manual chunk splitting for better caching
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'framer-motion': ['framer-motion'],
          'mui-vendor': ['@mui/material', '@mui/icons-material'],
          'gsap': ['gsap'],
          'lenis': ['@studio-freight/lenis'],
        },
      },
    },
    // Optimize minification (using esbuild for better performance)
    minify: 'esbuild',
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Optimize source maps for production
    sourcemap: false,
    // Optimize target browsers
    target: 'es2015',
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', '@mui/material', '@mui/icons-material'],
    exclude: ['@emailjs/browser'],
  },
  // Enable compression
  server: {
    hmr: {
      overlay: false,
    },
  },
})
