import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';
import icon from "astro-icon";

// import netlify from "@astrojs/netlify";
import cloudflare from '@astrojs/cloudflare';


// https://astro.build/config
export default defineConfig({
  // site: "https://lcg-knowbud.netlify.app",
  integrations: [tailwind(), react(), icon()],
  output: "server",
  adapter: cloudflare(),
  devToolbar: { enabled: false },
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
  }
});