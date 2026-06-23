// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import varlockAstroIntegration from '@varlock/astro-integration';
import { varlockCloudflareVitePlugin } from '@varlock/cloudflare-integration';

// https://astro.build/config
export default defineConfig({
    // this builds with an error
    // adapter: cloudflare(),
    integrations: [varlockAstroIntegration()],

    // this fails as well
    // vite: {
    //     plugins: [varlockCloudflareVitePlugin()]
    // }
});
