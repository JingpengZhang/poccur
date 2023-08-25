// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    buildAssetsDir:'static',//修改站点资产的文件夹名称，默认是_nuxt,否则部署到 github page 上会出错
  },
  experimental:{
    payloadExtraction:false
  },
  devtools: { enabled: true },
  modules: ["nuxt-icon", "@nuxtjs/tailwindcss", "@nuxt/content"],
  content: {
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: "github-light",
        // Theme used if `html.dark`
        dark: "github-dark",
        // Theme used if `html.sepia`
        sepia: "monokai",
      },
      preload: [
        "javascript",
        "css",
        "html",
        "shell",
        "vue",
        "tsx",
        "jsx",
        "ts",
        "js",
        "c",
        "cpp",
        "java",
      ],
    },
  },
});
