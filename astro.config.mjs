import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: 'https://howto.technology',
  integrations: [
    starlight({
      title: "HowTo.Technology",
    }),
  ],
});
