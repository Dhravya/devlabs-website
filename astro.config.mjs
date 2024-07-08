import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://devlabs.club",
  base: "/devlabs-website",
  output: "server",
  adapter: cloudflare()
});