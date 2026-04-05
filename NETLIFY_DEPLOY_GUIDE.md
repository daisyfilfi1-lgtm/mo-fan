# Netlify 部署指南

## 🚀 一键部署

### 方式1: 通过 Git 部署 (推荐)

#### 步骤1: 将代码推送到 GitHub
```bash
# 初始化git仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: MOFAN brand website v2.0"

# 添加到远程仓库 (替换为你的GitHub仓库地址)
git remote add origin https://github.com/你的用户名/mofan-website.git

# 推送
git push -u origin main
```

#### 步骤2: Netlify 配置
1. 登录 [Netlify](https://www.netlify.com/)
2. 点击 **"Add new site"** → **"Import an existing project"**
3. 选择 **GitHub** 授权
4. 选择你的仓库 `mofan-website`
5. 配置构建设置：
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. 点击 **Deploy site**

#### 步骤3: 等待部署完成
- 构建时间约 1-2 分钟
- 自动生成 `xxx.netlify.app` 域名
- 可以配置自定义域名

---

### 方式2: 手动拖拽部署 (最快)

#### 步骤1: 本地构建
```bash
npm run build
```

#### 步骤2: 拖拽部署
1. 登录 [Netlify](https://app.netlify.com/drop)
2. 将 `dist` 文件夹 **直接拖拽** 到网页中
3. 自动生成网站链接

---

### 方式3: Netlify CLI (命令行)

#### 安装 CLI
```bash
npm install -g netlify-cli
```

#### 登录
```bash
netlify login
```

#### 初始化并部署
```bash
# 在项目根目录执行
netlify init

# 选择: Create & configure a new site
# 选择: 你的 team
# 输入: 网站名称 (如: mofan-official)

# 部署
netlify deploy --prod
```

---

## ⚙️ 已配置的文件

### netlify.toml
项目已包含 `netlify.toml` 配置文件：

```toml
[build]
  publish = "dist"        # 构建输出目录
  command = "npm run build"  # 构建命令

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200            # 支持前端路由
```

### 关键配置说明
- **SPA 路由支持**: 所有路由指向 index.html，支持 React Router
- **构建优化**: 自动优化静态资源
- **CDN 加速**: 全球 CDN 分发

---

## 🌐 部署后配置

### 1. 自定义域名
1. Netlify 控制台 → **Domain settings**
2. 点击 **Add custom domain**
3. 输入你的域名 (如: `mofan.artisan`)
4. 按提示配置 DNS

### 2. HTTPS 证书
- Netlify 自动生成 Let's Encrypt 证书
- 自动续期，无需手动配置

### 3. 环境变量 (如需)
在 Netlify 控制台 → **Site settings** → **Environment variables** 添加：
```
VITE_API_URL = https://api.mofan.com
VITE_STRIPE_KEY = pk_live_xxx
```

---

## 📊 构建优化

### 已启用优化
- ✅ 自动代码分割
- ✅ 图片懒加载
- ✅ 资源压缩 (Gzip/Brotli)
- ✅ 浏览器缓存策略

### 构建统计
```
dist/index.html        1.85 kB   (gzip: 0.95 kB)
dist/assets/index.css  8.82 kB   (gzip: 2.50 kB)
dist/assets/index.js   239.80 kB (gzip: 75.24 kB)
```

首次加载约 **80KB** (gzip后)，性能优秀。

---

## 🔧 故障排查

### 问题1: 构建失败
```
Error: Build failed
```
**解决**: 
- 检查 `package.json` 中 `build` 命令
- 确认 `vite` 已安装

### 问题2: 路由404
```
Page not found
```
**解决**: 
- 已配置 `netlify.toml` 重定向规则
- 刷新页面即可

### 问题3: 图片不显示
```
Failed to load image
```
**解决**: 
- 检查 `src/utils/images.js` 中的图片链接
- 确保使用 HTTPS

---

## 📱 部署检查清单

部署前确认:
- [ ] `npm run build` 本地构建成功
- [ ] `dist` 文件夹存在
- [ ] `netlify.toml` 已提交到git
- [ ] 所有图片链接可访问
- [ ] 中英文切换正常

部署后检查:
- [ ] 网站可正常访问
- [ ] 首页Hero显示正常
- [ ] 路由跳转正常
- [ ] 移动端适配正常
- [ ] 加载速度 < 3秒

---

## 🎯 推荐部署流程

### 开发环境 → 生产环境

```bash
# 1. 本地测试
npm run dev
# 访问 http://localhost:5173

# 2. 构建检查
npm run build
# 检查 dist 文件夹

# 3. 提交代码
git add .
git commit -m "Ready for production"
git push origin main

# 4. Netlify 自动部署
# 等待 1-2 分钟

# 5. 访问网站
# https://你的域名.netlify.app
```

---

## 🔗 部署后链接示例

部署成功后会获得以下链接：

| 类型 | 链接示例 |
|------|---------|
| 默认域名 | `https://mofan-official.netlify.app` |
| 自定义域名 | `https://mofan.artisan` |
| 预览链接 | `https://deploy-preview-1--mofan.netlify.app` |

---

## 💡 高级配置

### 表单处理 (联系表单)
```html
<!-- 在 Contact.jsx 中添加 -->
<form name="contact" netlify>
  <input type="text" name="name" />
  <input type="email" name="email" />
  <textarea name="message"></textarea>
</form>
```

### 边缘函数 (如需API)
创建 `netlify/edge-functions/hello.js`:
```javascript
export default async (request, context) => {
  return new Response("Hello from MOFAN!")
}
```

---

## 📞 需要帮助?

- Netlify 文档: https://docs.netlify.com/
- 常见问题: https://answers.netlify.com/
- 实时支持: 本项目的 Discord/微信群

---

**现在可以开始部署了！选择方式1(Git)或方式2(拖拽)均可。**
