import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import Comments from './Comments.vue'
import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // 在文章正文之后插入 Giscus 评论区
      'doc-after': () => h(Comments),
    })
  },
} satisfies Theme
