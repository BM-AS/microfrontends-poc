// app.config.js
import { createApp } from "vinxi";
import { serverFunctions } from "@tanstack/start/plugin";
import reactRefresh from "@vitejs/plugin-react";
var app_config_default = createApp({
  server: {
    preset: "node-server"
  },
  routers: [
    {
      name: "public",
      type: "static",
      dir: "./public"
    },
    {
      name: "client",
      type: "client",
      handler: "./app/client.tsx",
      target: "browser",
      plugins: () => [reactRefresh()],
      base: "/_build"
    },
    {
      name: "ssr",
      type: "http",
      handler: "./app/ssr.tsx",
      target: "server"
    },
    serverFunctions()
  ]
});
export {
  app_config_default as default
};
