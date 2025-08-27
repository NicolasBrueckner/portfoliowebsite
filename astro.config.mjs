import { webcore } from 'webcoreui/integration';
// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [webcore()]
})