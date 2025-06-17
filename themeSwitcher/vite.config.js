import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  darkMode: 'class',
  plugins: [react(),tailwindcss()],
})

// This configuration file sets up Vite with React and Tailwind CSS plugins.
// It imports the necessary modules and exports a configuration object that includes the plugins.
// The `react` plugin enables React support, while the `tailwindcss` plugin integrates Tailwind CSS for styling.
// The configuration is used to build and serve the application, allowing for a modern development experience with fast refresh and optimized builds.     