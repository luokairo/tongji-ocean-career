# 简历模板文件目录

本目录用于存放可供下载的简历模板（PDF / docx / LaTeX 等）。

**目录结构建议**：

```
templates/
├── tech-zh.docx
├── tech-en.pdf
├── general-zh.docx
├── research-zh.docx
├── cv-en.tex
├── civil-service-zh.docx
└── institution-zh.docx
```

**添加新模板的步骤**：

1. 把模板文件放入本目录
2. 在 `docs/resume/templates.md` 的表格中添加下载链接：

   ```markdown
   [下载](/templates/tech-zh.docx)
   ```

   （注意：VitePress 的 `public/` 目录会被原样复制到站点根目录，因此模板的访问路径为 `/templates/xxx.docx`）

3. 提交 PR 即可
