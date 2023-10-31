import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001,
    proxy: {
      "/api": {
        target: "http://localhost:3000/",
        changeOrigin: true,
      },
    },
  },

  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
// Để không cần phải gán cứng hostname/IP của API server trong dự án, chúng ta hiệu chỉnh
// vite.config.js, cấu hình proxy chuyển các yêu cầu có URL chứa /api xuất phát từ ứng dụng Vue
