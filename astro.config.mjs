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
//import htmlBeautifier from "astro-html-beautifier";

// https://astro.build/config
import purgecss from "astro-purgecss"

// https://astro.build/config
import htmlMinifier from "astro-html-minifier"

// https://astro.build/config
//import compress from "astro-compress";

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
    //purgecss(),
    htmlMinifier(),
    //compress()
  ],
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "one-dark-pro",
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
})
