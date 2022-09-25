import image from '@astrojs/image'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [sitemap(), react(), image()]
})
