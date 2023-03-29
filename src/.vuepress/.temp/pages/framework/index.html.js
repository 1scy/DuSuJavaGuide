export const data = JSON.parse("{\"key\":\"v-7d72c4ac\",\"path\":\"/framework/\",\"title\":\"Framework\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Framework\",\"description\":\"\"},\"headers\":[],\"readingTime\":{\"minutes\":0.01,\"words\":2},\"filePathRelative\":null,\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
