import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";
import { autoCatalogPlugin } from "vuepress-plugin-auto-catalog";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Java学习指南 -> 程序员独苏",
      description: "程序员独苏 的学习指南文档",
    },
  },
  theme,

  plugins: [
    autoCatalogPlugin({
      //插件选项
      exclude: ["/java/","/framework/","/message-queue/","/database/","/redis/",],
    }),
    searchPlugin({
       // 排除首页
       isSearchable: (page) => page.path !== "/",
       maxSuggestions: 10,
       hotKeys: ["s", "/"],
       // 用于在页面的搜索索引中添加额外字段
       getExtraFields: () => [],
       locales: {
         "/": {
           placeholder: "搜索",
         },
       },
     }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
