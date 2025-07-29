import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), flowbiteReact()],
  server: {
    port: 3000,
    allowedHosts: [
      "48876766d5b0.ngrok-free.app", // Your specific ngrok host
    ],
  },
});