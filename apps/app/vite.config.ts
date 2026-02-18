import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { microfrontends } from "@vercel/microfrontends/experimental/vite";

export default defineConfig({
  server: {
    port: 3001,
  },
  plugins: [
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    microfrontends(),
    tanstackStart(),
    viteReact(),
    nitro(),
  ],
});
