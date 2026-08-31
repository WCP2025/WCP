import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// Config de Vite + React + alias "@/" apuntando a /src, para poder
// importar como "@/components/Hero" en vez de rutas relativas largas
// tipo "../../components/Hero". El mismo alias también está declarado
// en tsconfig.app.json (paths) para que TypeScript no marque error.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
