# 同济海洋就业指南

> 校企协同实践与就业能力提升 · 共享平台
> 基于 [VitePress](https://vitepress.dev/) + [GitHub Pages](https://pages.github.com/) + [Giscus](https://giscus.app/) 构建。

本项目对应《校企协同实践与就业能力提升行动方案》中——**第三组任务 3「共享平台建设」**，沉淀同济海洋方向的企业资源、学长学姐求职经验、简历模板与就业时间线。

## 站点结构

```
首页 · 项目介绍 · 企业图谱 · 求职经验 · 简历专区 · 时间线 · 毕业去向
```

详见 [docs/about/index.md](./docs/about/index.md)。

## 本地开发

```bash
# 1. 安装依赖（仅首次）
npm install

# 2. 本地预览（默认 http://localhost:5173）
npm run docs:dev

# 3. 生产构建
npm run docs:build

# 4. 预览生产构建结果
npm run docs:preview
```

## 部署

### 一、首次部署（建议路径）

1. 在 GitHub 创建一个新仓库，例如 `tongji-ocean-career`。
2. 把本项目推送到仓库：
   ```bash
   git init
   git add .
   git commit -m "init: tongji ocean career guide"
   git branch -M main
   git remote add origin git@github.com:<your-account>/tongji-ocean-career.git
   git push -u origin main
   ```
3. 在仓库 **Settings → Pages → Build and deployment → Source**，选择 **GitHub Actions**。
4. push 后 [`Deploy VitePress site to GitHub Pages`](./.github/workflows/deploy.yml) 工作流会自动运行，几分钟后访问：
   ```
   https://<your-account>.github.io/tongji-ocean-career/
   ```

### 二、仓库地址配置

当前仓库地址：`luokairo/tongji-ocean-career`。

若 fork 后部署到自己的账号下，需要把以下文件里的 `luokairo/tongji-ocean-career` 全局替换：

```bash
grep -rl "luokairo/tongji-ocean-career" docs .github *.md \
  | xargs sed -i '' "s|luokairo/tongji-ocean-career|<your-account>/<your-repo>|g"
```

### 三、（可选）启用 Giscus 评论

1. 在 GitHub 仓库 **Settings → General → Features** 勾选 **Discussions**。
2. 安装 [giscus app](https://github.com/apps/giscus) 到该仓库。
3. 打开 <https://giscus.app/zh-CN>，按页面提示选择仓库与 Discussions 分类，得到 `data-repo-id` 和 `data-category-id`。
4. 把两个值填入 [`docs/.vitepress/theme/Comments.vue`](./docs/.vitepress/theme/Comments.vue) 中 `GISCUS_CONFIG`。
5. 提交并推送，评论区即可生效。

### 四、（可选）自定义域名

在 `docs/public/` 下创建 `CNAME` 文件，填入你的域名（一行一个）。同时把 `docs/.vitepress/config.mts` 中的 `base` 改回 `/`，并把 GitHub Actions 中的 `SITE_BASE: /` 改回根路径。

## 内容贡献

详见 [CONTRIBUTING.md](./CONTRIBUTING.md)。三种方式：

- **Issue**（推荐给非技术同学）：使用「经验补充 / 企业信息补充 / 站点问题」三个模板
- **PR**：直接编辑 `docs/` 下的 Markdown
- **评论**：每篇文章底部的 Giscus 评论框

## 许可

- 代码：MIT
- 内容：[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh)
