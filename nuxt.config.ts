import { resolve } from "path";

export default defineNuxtConfig({
  alias: {
        "@": resolve(__dirname, "/"),
  },
});

//  compatibilityDate: '2024-04-03',
//  devtools: { enabled: true }