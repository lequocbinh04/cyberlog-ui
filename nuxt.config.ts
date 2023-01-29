export default defineNuxtConfig({
  css: ["~/assets/css/tailwind.css"],
  alias: {
    "@": ".",
  },
  plugins: ["@/directives/VTooltip.ts"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
