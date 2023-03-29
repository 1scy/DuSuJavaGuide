import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://whoamis.cf/",
  print: false,

  author: {
    name: "独苏",
    url: "https://whoamis.cf/",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "1scy/DuSuJavaGuide",

  docsDir: "demo/theme-docs/src",

  // navbar
  navbar: zhNavbar,

  // sidebar
  sidebar: zhSidebar,

  locales: {

    /**
     * Chinese locale config
     */
    "/": {


      pageInfo: [
        "Author",
        "Category",
        "Tag",
        "Date",
        "Original",
        "Word",
        "ReadingTime",
      ],

      footer: "默认页脚",

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "编辑此页",
      },
    },
  },

  plugins: {
    comment: {
      // @ts-expect-error: You should generate and use your own comment service
      provider: "Waline",
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
  },
});
