# Bio-AI Static

这是从主站 `Bio-AI` 模块抽出来的独立 GitHub 静态站工程。

## 本地开发

```bash
npm install
npm run dev
```

## 本地导出

```bash
npm install
npm run build
```

导出结果会生成在 `out/`。

## GitHub Pages

如果仓库发布在 `https://<user>.github.io/<repo>/` 这种项目页路径下，构建前设置：

```bash
GITHUB_PAGES_BASE_PATH=/<repo>
```

如果你用的是自定义域名或用户主页根路径，可以不设置这个变量。
