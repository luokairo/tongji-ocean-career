import { defineConfig } from 'vitepress'

// 部署到 GitHub Pages 时，把 base 改为 '/<仓库名>/'（例如 '/tongji-ocean-career/'）。
// 若使用自定义域名或部署到根路径，可改回 '/'。
const base = process.env.SITE_BASE ?? '/'

export default defineConfig({
  lang: 'zh-CN',
  title: '同济海洋就业指南',
  description: '同济大学海洋学院校企协同实践与就业经验共享平台',
  base,
  lastUpdated: true,
  cleanUrls: true,
  srcExclude: ['**/public/**/*.md'],
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}logo.svg` }],
    ['meta', { name: 'theme-color', content: '#1F4E79' }],
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '同济海洋就业指南',
    outline: {
      level: [2, 3],
      label: '本页目录',
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '项目介绍', link: '/about/' },
      { text: '企业图谱', link: '/companies/' },
      { text: '求职经验', link: '/experience/' },
      { text: '简历专区', link: '/resume/' },
      { text: '时间线', link: '/timeline/' },
      { text: '毕业去向', link: '/destinations/' },
    ],
    sidebar: {
      '/about/': [
        {
          text: '项目介绍',
          items: [{ text: '行动方案概览', link: '/about/' }],
        },
      ],
      '/companies/': [
        {
          text: '企业图谱（临港·深蓝企航）',
          items: [
            { text: '总览', link: '/companies/' },
            { text: '央企 / 国企', link: '/companies/soe' },
            { text: '民营企业', link: '/companies/private' },
            { text: '研究所 / 事业单位', link: '/companies/research' },
          ],
        },
      ],
      '/experience/': [
        {
          text: '求职经验分享',
          items: [
            { text: '总览', link: '/experience/' },
            { text: '企业就业', link: '/experience/enterprise' },
            { text: '选调生', link: '/experience/civil-service' },
            { text: '事业单位', link: '/experience/institution' },
          ],
        },
      ],
      '/resume/': [
        {
          text: '简历专区',
          items: [
            { text: '总览', link: '/resume/' },
            { text: '简历模板', link: '/resume/templates' },
            { text: '优秀案例点评', link: '/resume/cases' },
          ],
        },
      ],
      '/timeline/': [
        {
          text: '求职时间线',
          items: [{ text: '总览', link: '/timeline/' }],
        },
      ],
      '/destinations/': [
        {
          text: '毕业去向',
          items: [{ text: '近 3–5 届去向数据', link: '/destinations/' }],
        },
      ],
    },
    socialLinks: [
      {
        icon: 'github',
        // 部署时把这里改成你自己的仓库地址
        link: 'https://github.com/luokairo/tongji-ocean-career',
      },
    ],
    editLink: {
      pattern:
        'https://github.com/luokairo/tongji-ocean-career/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },
    lastUpdatedText: '最后更新于',
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              },
            },
          },
        },
      },
    },
    footer: {
      message:
        '基于 <a href="https://vitepress.dev" target="_blank">VitePress</a> 构建 · 内容遵循 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh" target="_blank">CC BY-NC-SA 4.0</a>',
      copyright: '© 同济大学海洋与地球科学学院 校企协同实践组',
    },
  },
  markdown: {
    lineNumbers: false,
    container: {
      tipLabel: '提示',
      warningLabel: '注意',
      dangerLabel: '警告',
      infoLabel: '信息',
      detailsLabel: '详细信息',
    },
  },
})
