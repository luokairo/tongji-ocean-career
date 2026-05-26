# 贡献指南

欢迎为《同济海洋就业指南》添砖加瓦！本平台靠学长学姐和在读同学的真实经验持续成长，**你提交的每一条经验，都会帮到下一届学弟学妹**。

## 你可以做什么？

- 📝 分享自己的求职经验（笔面试、备考、心路历程）
- 🏢 推荐你了解的招聘单位 / 岗位 / 内推渠道
- 📄 贡献简历模板或脱敏简历案例
- 🗓️ 补充求职时间线上的细节（具体公告日期、考试节奏）
- 🐛 报告错别字、链接失效、内容错误
- 💬 在文章底部留言讨论、答疑

## 三种贡献路径

### 路径 1 · Issue（推荐给非技术同学，5 分钟搞定）

1. 进入仓库 [Issues 页面](https://github.com/luokairo/tongji-ocean-career/issues/new/choose)
2. 选择一个模板：
   - **📝 求职经验补充**
   - **🏢 企业信息补充**
   - **🐛 站点问题反馈**
3. 按表单填写后提交
4. 编辑组成员审核并把内容整理到站内

### 路径 2 · Pull Request（适合熟悉 Git 的同学）

```bash
# Fork 本仓库到自己的账号下

git clone git@github.com:<your-account>/tongji-ocean-career.git
cd tongji-ocean-career
npm install
npm run docs:dev   # 本地预览

# 创建分支
git checkout -b feat/<简短描述>

# 编辑 docs/ 下对应 Markdown 文件
# 比如新增一篇企业就业经验：
# docs/experience/enterprise.md 内追加 "## 案例 X" 节

git add docs/
git commit -m "feat(experience): 新增 XX 公司面经"
git push -u origin feat/<简短描述>

# 在 GitHub 上提 PR
```

### 路径 3 · 文章底部评论

每一篇文章的末尾都有 Giscus 评论框（基于 GitHub Discussions），登录 GitHub 即可发言。适合：

- 简短追问
- 对已有内容的补充更新
- 经验细节的二次讨论

## 内容规范

### 隐私脱敏

- ❌ 不要发布**真实身份证号、手机号、家庭住址、私人邮箱**
- ❌ 不要发布**他人未公开的简历内容、面试录音、招聘内部资料**
- ✅ 单位名称可以用化名（"某央企海洋装备研究院"）
- ✅ 数据可以保留（绩点、笔试分数等），但建议**百分位化**避免过度具体

### 写作风格

- 经验类文章建议结构化：**基本信息 → 时间线 → 笔面试 → 总结**
- 用 Markdown 表格归纳信息，便于检索
- 多用具体数字、对比、案例，少用空泛形容词
- 提到的政策、招聘节奏请注明**信息时效**（如"2026-04 核实"）

### 文件命名

新增 Markdown 文件时：

- 全部小写、英文短横线连接（`enterprise-xxx.md`）
- 中文页面也用 ASCII 文件名，标题用中文即可
- 放在合适的栏目目录下：
  - 企业资源 → `docs/companies/`
  - 经验分享 → `docs/experience/`
  - 简历相关 → `docs/resume/`

### 图片与附件

- 图片放入 `docs/public/images/<topic>/<file>.png`，文中引用为 `/images/<topic>/<file>.png`
- 简历模板等可下载文件放入 `docs/public/templates/`
- 避免提交超过 5MB 的单个文件；大文件建议外链 OneDrive / 阿里云盘等

## 内容审核

- 编辑组（成果整理与平台建设组）会对内容做基础事实核对与脱敏审查
- 涉及他人姓名 / 单位 / 联系方式的，会与贡献者再次确认授权
- 明显广告、传销、政治敏感内容会被关闭

## 许可

提交贡献即视为同意：

- 代码部分按 **MIT** 协议开源
- 内容部分按 **[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh)** 协议共享（**署名**-**非商业**-**相同方式共享**）

## 关于编辑组

编辑组成员将由"成果整理与平台建设组"招募并轮值，欢迎下一届同学接力！

如希望加入编辑组，可在 Issue 或评论中留言联系。
