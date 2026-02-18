// app.config.ts
import { defineConfig } from "@tanstack/start/config";
import tsConfigPaths from "vite-tsconfig-paths";
import { vercelMicrofrontends } from "@vercel/microfrontends/experimental/vite";
var app_config_default = defineConfig({
  vite: {
    plugins: [
      tsConfigPaths({ root: "." }),
      vercelMicrofrontends()
    ]
  }
});
export {
  app_config_default as default
};
