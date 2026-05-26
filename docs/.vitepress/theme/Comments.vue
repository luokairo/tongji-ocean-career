<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch, nextTick, computed } from 'vue'
import { useData, useRoute } from 'vitepress'

// ============================================================
// Giscus 配置 —— 部署后请按 https://giscus.app 生成的实际值替换：
//   1. data-repo            形如 "luokairo/tongji-ocean-career"
//   2. data-repo-id         giscus.app 生成
//   3. data-category        建议使用 "Announcements" 或自定义
//   4. data-category-id     giscus.app 生成
// ------------------------------------------------------------
const GISCUS_CONFIG = {
  repo: 'luokairo/tongji-ocean-career',
  repoId: 'REPLACE_WITH_REPO_ID',
  category: 'Announcements',
  categoryId: 'REPLACE_WITH_CATEGORY_ID',
  mapping: 'pathname',
  strict: '0',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'top',
  lang: 'zh-CN',
}
// ============================================================

const isConfigured = computed(
  () =>
    !GISCUS_CONFIG.repoId.startsWith('REPLACE_') &&
    !GISCUS_CONFIG.categoryId.startsWith('REPLACE_'),
)

const container = ref<HTMLDivElement | null>(null)
const route = useRoute()
const { isDark } = useData()

function injectGiscus() {
  if (!container.value || !isConfigured.value) return
  container.value.innerHTML = ''
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.async = true
  script.crossOrigin = 'anonymous'
  script.setAttribute('data-repo', GISCUS_CONFIG.repo)
  script.setAttribute('data-repo-id', GISCUS_CONFIG.repoId)
  script.setAttribute('data-category', GISCUS_CONFIG.category)
  script.setAttribute('data-category-id', GISCUS_CONFIG.categoryId)
  script.setAttribute('data-mapping', GISCUS_CONFIG.mapping)
  script.setAttribute('data-strict', GISCUS_CONFIG.strict)
  script.setAttribute('data-reactions-enabled', GISCUS_CONFIG.reactionsEnabled)
  script.setAttribute('data-emit-metadata', GISCUS_CONFIG.emitMetadata)
  script.setAttribute('data-input-position', GISCUS_CONFIG.inputPosition)
  script.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
  script.setAttribute('data-lang', GISCUS_CONFIG.lang)
  container.value.appendChild(script)
}

function sendThemeMessage() {
  const iframe = document.querySelector<HTMLIFrameElement>(
    'iframe.giscus-frame',
  )
  iframe?.contentWindow?.postMessage(
    { giscus: { setConfig: { theme: isDark.value ? 'dark' : 'light' } } },
    'https://giscus.app',
  )
}

onMounted(() => nextTick(injectGiscus))

onUnmounted(() => {
  if (container.value) container.value.innerHTML = ''
})

watch(
  () => route.path,
  () => nextTick(injectGiscus),
)
watch(isDark, sendThemeMessage)
</script>

<template>
  <div class="comments-wrapper">
    <h2 id="评论">💬 留言与经验补充</h2>
    <p class="comments-hint">
      欢迎在此留言交流、补充经验或反馈错漏。评论需登录 GitHub 账号。
    </p>
    <div v-if="isConfigured" ref="container" class="giscus-container" />
    <p v-else class="comments-placeholder">
      <em
        >评论系统尚未配置。请在
        <code>docs/.vitepress/theme/Comments.vue</code> 中填入 Giscus 的
        repoId / categoryId（详见
        <a href="https://giscus.app" target="_blank" rel="noopener"
          >giscus.app</a
        >）。</em
      >
    </p>
  </div>
</template>

<style scoped>
.comments-wrapper {
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--vp-c-divider);
}
.comments-hint {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  margin-bottom: 1rem;
}
.comments-placeholder {
  color: var(--vp-c-text-3);
  font-size: 0.85rem;
  padding: 0.75rem 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 6px;
}
.giscus-container {
  min-height: 1rem;
}
</style>
