import { defineConfig } from "@tanstack/react-start/config";
import { microfrontends } from "@vercel/microfrontends/experimental/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  tsr: {
    appDirectory: "src",
  },
  vite: {
    plugins: () => [tsConfigPaths(), microfrontends()],
  },
});
