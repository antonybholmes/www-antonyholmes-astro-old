import { defineConfig } from "astro/config" //import react from '@astrojs/react'; //import preact from '@astrojs/preact'

import robotsTxt from "astro-robots-txt"
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap" //import solid from "@astrojs/solid-js";
//import preact from "@astrojs/preact";
// https://astro.build/config
// https://astro.build/config

//import svelte from "@astrojs/svelte"
//import react from "@astrojs/react";

// https://astro.build/config
import preact from "@astrojs/preact"

// https://astro.build/config
import prefetch from "@astrojs/prefetch"
import partytown from "@astrojs/partytown"
import htmlBeautifier from "astro-html-beautifier"

// https://astro.build/config
export default defineConfig({
  site: "https://www.antonyholmes.com",
  integrations: [
    //svelte(),
    preact(),
    tailwind(),
    sitemap(),
    robotsTxt({
      host: "antonyholmes.com",
    }),
    prefetch(),
    partytown(),
    //htmlBeautifier(),
  ],
})
