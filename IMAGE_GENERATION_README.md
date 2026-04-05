# MOFAN 品牌图片生成完整指南

## 📦 已生成的资源文件

本目录包含以下图片生成资源:

| 文件名 | 说明 | 用途 |
|--------|------|------|
| `AI_IMAGE_PROMPTS.md` | 完整提示词库 | 包含25张图的详细Midjourney提示词 |
| `IMAGE_GENERATION_WORKFLOW.md` | 工作流指南 | 工具选择、参数设置、优化流程 |
| `midjourney-batch-prompts.txt` | 批量提示词 | 可直接复制到Discord使用的25条命令 |
| `scripts/generate-images.js` | 管理脚本 | 图片统计、优先级筛选、检查清单 |
| `IMAGE_CHECKLIST.md` | 检查清单 | 可勾选的生成进度清单 |

---

## 🚀 快速开始 (3步生成)

### 步骤1: 选择工具

**推荐方案** (质量最高):
- **Midjourney V6** - $30/月, 专业级质量
- 网址: discord.gg/midjourney

**免费方案**:
- **Leonardo.ai** - 免费150积分/天
- 网址: leonardo.ai

**国内方案**:
- **即梦AI** - 字节跳动, 中文支持
- 网址: jimeng.jianying.com

### 步骤2: 复制提示词生成

打开 `midjourney-batch-prompts.txt`, 复制提示词到Discord:

```
/imagine prompt: Professional food photography, Mantou in bamboo steamer...
```

或查看 `AI_IMAGE_PROMPTS.md` 获取分类提示词。

### 步骤3: 下载并优化

1. 在Midjourney中选择满意的版本 (U1-U4)
2. 下载PNG格式原图
3. 使用 [TinyPNG](https://tinypng.com) 压缩
4. 按命名规范重命名
5. 上传到 `src/utils/images.js` 替换链接

---

## 📊 图片生成统计

```
总计: 25 张
├── P0 (必须生成): 7 张  ⭐ 先生成这些
├── P1 (重要): 14 张
└── P2 (可选): 4 张
```

### P0 必须生成 (7张)

按优先级顺序生成:

1. **Hero主图** (B&W Dramatic) - 首页首屏
2. **Foundation课程** - 家庭友好风格
3. **Professional课程** - 专业厨房风格  
4. **Immersion课程** - 西安文化风格
5. **SKU-001 芝士流心** - 产品展示
6. **SKU-002 彩虹螺旋卷** - 产品展示
7. **SKU-003 兔兔包** - 产品展示

生成这7张即可满足上线需求。

---

## 🎨 品牌视觉风格规范

### 核心风格
- **Neo-Editorial** × **High-Fashion Food Photography**
- 对标: Vogue美食大片、Aesop、Blue Bottle

### 色彩系统
- **默认**: 高对比黑白 (grayscale + contrast)
- **悬停**: 彩色揭示
- **强调色**: 荧光青绿 #00D9C0

### 技术参数
```
滤镜: grayscale(100%) contrast(1.2) brightness(0.9)
光影: 45度侧逆光
色温: 5500K微暖
过渡: duration-700
```

---

## 🛠️ 使用管理脚本

```bash
# 查看统计
node scripts/generate-images.js stats

# 查看P0优先级提示词
node scripts/generate-images.js p0

# 查看P1优先级提示词
node scripts/generate-images.js p1

# 生成检查清单
node scripts/generate-images.js checklist
```

---

## 📁 图片命名规范

生成后请按以下命名:

```
hero-main.jpg               # Hero主图
hero-mobile.jpg             # Hero手机版
course-foundation.jpg       # Foundation课程
course-professional.jpg     # Professional课程
course-immersion.jpg        # Immersion课程
product-001-cheese.jpg      # SKU-001
product-002-rainbow.jpg     # SKU-002
...
story-chapter1.jpg          # 品牌故事1
story-chapter2.jpg          # 品牌故事2
story-chapter3.jpg          # 品牌故事3
story-heritage.jpg          # 文化传承
journal-flour.jpg           # 面粉测评
journal-etsy.jpg            # Etsy创业
journal-compliance.jpg      # 合规指南
journal-kids.jpg            # 亲子食谱
```

---

## 💰 成本预估

| 方案 | 成本 | 时间 | 质量 |
|------|------|------|------|
| Midjourney | $30/月 | 3-4小时 | ★★★★★ |
| Leonardo.ai | 免费 | 4-5小时 | ★★★★☆ |
| 即梦AI | 免费 | 3-4小时 | ★★★☆☆ |
| 专业摄影 | ¥10,000+ | 1-2周 | ★★★★★ |

**推荐**: Midjourney $30方案，性价比最高。

---

## ⚡ 紧急方案

如果明天就要上线:

1. ✅ **已完成**: 当前使用Unsplash专业图作为占位
2. 📋 **进行中**: 使用本指南逐步生成替换
3. 🔄 **替换流程**: 每天生成2-3张，一周内完成全部替换

网站可以先上线，图片后续迭代更新。

---

## 📋 质量检查清单

每张生成后检查:

- [ ] 构图: 主体清晰，符合网格要求
- [ ] 风格: B&W或高饱和，符合Neo-Editorial
- [ ] 品牌色: #00D9C0 是否正确呈现
- [ ] 质感: 食物纹理清晰，有食欲感
- [ ] 光影: 45度侧逆光，有层次感
- [ ] 背景: 不杂乱，突出主体
- [ ] 尺寸: 符合要求的宽高比
- [ ] 清晰度: 8k/4k，无模糊

---

## 🆘 需要帮助?

### 提示词效果不理想?
- 调整 `--s` 参数 (0-1000) 控制风格化程度
- 添加 `--no` 排除不需要的元素
- 参考 `AI_IMAGE_PROMPTS.md` 中的备选方案

### 生成质量不稳定?
- 使用Midjourney V6 (最新版本)
- 开启 Raw Mode (`--style raw`)
- 多次生成选择最佳结果

### 需要更多图片?
- 修改 `scripts/generate-images.js` 添加新条目
- 参考已有提示词结构编写新的

---

## 📅 建议时间规划

### Day 1: P0图片 (3-4小时)
- Hero主图
- 3张课程图
- 3张产品图

### Day 2: P1图片 (3-4小时)
- 剩余8张产品图
- 4张品牌故事图

### Day 3: P2图片 (2小时)
- 4张博客图
- Hero备选图

### Day 4: 优化整合 (2小时)
- 压缩优化
- 上传CDN
- 替换代码中的图片链接

**总计: 4天完成全部25张图片**

---

## 🎯 下一步行动

1. **现在**: 选择工具 (推荐Midjourney)
2. **今天**: 生成P0的7张核心图片
3. **本周**: 完成全部25张图片
4. **替换**: 更新 `src/utils/images.js` 中的图片链接
5. **上线**: 重新构建部署

---

**祝生成顺利! 如有问题随时询问。**

*文档版本: v1.0*
*更新日期: 2026-04-05*
