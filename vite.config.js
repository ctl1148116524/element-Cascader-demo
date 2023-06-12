import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// element按需加载
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// 网页更新
import { webUpdateNotice } from "@plugin-web-update-notification/vite";

import path from "path";
// gzip
import viteCompression from "vite-plugin-compression";
//兼容低版本浏览器
import legacy from "@vitejs/plugin-legacy";
// js占比
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    // proxy: {
    //   // 字符串简写写法
    //   "/appapi": "http://172.26.215.225:9999/",
    // },
  },
  preview: {
    host: "0.0.0.0",
    port: 5000,
  },

  build: {
    // 多页面
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
    sourcemap: false, //开启前端监听需要
    minify: "terser",
    // 去除 console等
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // 启用/禁用 brotli 压缩大小报告
    reportCompressedSize: false,
    // 消除打包大小超过2000kb警告
    chunkSizeWarningLimit: 2000,
  },
  plugins: [
    vue(),
    webUpdateNotice({
      versionType: "build_timestamp",
      logVersion: true,
      hiddenDismissButton: true, //不显示忽略按钮
      notificationProps: {
        title: "发现新版本",
        description: "网页有更新,请刷新后使用!",
        buttonText: "刷新",
        dismissButtonText: "忽略",
      },
    }),
    // elelment 按需加载
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        {
          ramda: [["*", "R"]],
          dayjs: [["*", "dayjs"]],
          "@/store": ["mainstore", "optionstore", "user_optionstore"],
          "@/components/mybus": ["mybus"],
          "@/utils/message": [["*", "mymessage"]],
          "@/utils/method": [["*", "mymethod"]],
          "vue3-menus": ["menusEvent"],
        },
      ],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dirs: [], //忽略 components的自动导入 我自己配了
      resolvers: [ElementPlusResolver()],
    }),
    // gzip压缩
    {
      ...viteCompression({
        ext: ".gz",
        algorithm: "gzip",
        filter: new RegExp("\\.(" + ["js", "css"].join("|") + ")$"),
        threshold: 10240,
      }),
      apply: "build",
    },
    {
      ...legacy({
        targets: ["defaults", "not IE 11"],
      }),
      apply: "build",
    },
    {
      ...visualizer({
        filename: "./dist/report.html",
        title: "Rollup Visualizer",
        open: process.env.NODE_vis ? true : false,
        gzipSize: true,
        brotliSize: true,
      }),
      apply: "build",
    },
  ],
});
