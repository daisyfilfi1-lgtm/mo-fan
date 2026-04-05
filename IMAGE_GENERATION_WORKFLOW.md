# MOFAN 品牌图片生成工作流指南

## 快速开始 (推荐工具)

### 方案A: Midjourney (推荐，质量最高)
**成本**: $30/月 (Standard计划)
**适用**: 专业级食物摄影

#### 操作步骤:
1. 加入 Discord: discord.gg/midjourney
2. 订阅 Standard Plan ($30/月)
3. 进入任意 #newbie 频道
4. 输入 `/imagine` + 提示词
5. 选择 U1-U4 放大满意的图
6. 下载后用于网站

#### 推荐设置:
```
/settings -> MJ Version 6 -> Raw Mode
```

---

### 方案B: Leonardo.ai (免费额度充足)
**成本**: 免费 (150 credits/天)
**适用**: 预算有限，快速生成

#### 操作步骤:
1. 注册: leonardo.ai
2. 选择模型: "Absolute Reality" 或 "DreamShaper"
3. 输入提示词
4. 设置: PhotoReal, Alchemy ON
5. 生成并下载

#### 推荐设置:
- Model: Absolute Reality v1.6
- PhotoReal: ON
- Alchemy: ON
- Resolution: 1024x1280

---

### 方案C: 国内工具 (无需翻墙)

#### 即梦AI (字节跳动)
- 网址: jimeng.jianying.com
- 支持中文提示词
- 免费额度充足

#### 通义万相 (阿里)
- 网址: tongyi.aliyun.com/wanxiang
- 适合中国审美

#### 文心一格 (百度)
- 网址: yige.baidu.com

---

## 优先级生成清单

按优先级顺序生成，确保核心页面先有图:

### 🔴 P0 - 必须先生成 (影响上线)
| 序号 | 图片 | 提示词位置 | 用途 |
|-----|------|-----------|------|
| 1 | Hero主图 | AI_IMAGE_PROMPTS.md 1.1 | 首页首屏 |
| 2 | Foundation课程 | 2.1 | 课程展示 |
| 3 | Professional课程 | 2.2 | 课程展示 |
| 4 | SKU-001 芝士流心 | 3.1 | 产品展示 |
| 5 | SKU-002 彩虹卷 | 3.1 | 产品展示 |

### 🟡 P1 - 重要 (上线前需要)
| 序号 | 图片 | 数量 |
|-----|------|-----|
| 6-8 | 其余课程图 | 3张 |
| 9-14 | 其余SKU产品 | 6张 |
| 15-18 | 品牌故事图 | 4张 |

### 🟢 P2 - 可以后期补充
| 序号 | 图片 | 数量 |
|-----|------|-----|
| 19-22 | 博客文章图 | 4张 |
| 23-25 | Hero备选/手机版 | 3张 |

---

## Midjourney 快速生成命令

复制以下命令到Discord直接执行:

### Hero主图 (先生成这张)
```
/imagine prompt: Professional food photography, Mantou in bamboo steamer, Dramatic hard flash lighting, High contrast black and white, Steam rising, 45-degree angle, Extreme close-up, Sharp focus on texture, Dark moody background, Vogue editorial style, Grainy film texture, 8k, ultra detailed --ar 16:9 --style raw --v 6.0
```

### Foundation课程
```
/imagine prompt: Food styling photography, Three cute mantou on ceramic plate, Soft morning window light, Pastel tones, Family breakfast scene, Minimalist Japanese style, Clean background #FAFAFA, 4:5 aspect ratio, 8k --ar 4:5 --style raw --v 6.0
```

### Professional课程
```
/imagine prompt: High-end food photography, Complex mantou art pieces, Dramatic chiaroscuro lighting, Professional kitchen, Chef's hands detail, Multiple steamers, Commercial style, Sharp shadows, Dark moody, 16:9 cinematic --ar 16:9 --style raw --v 6.0
```

### 芝士流心馒头 (SKU-001)
```
/imagine prompt: Cut cheese lava mantou, Golden flowing mozzarella center, Steam rising, Bamboo steamer, 45-degree top-down, Soft side light, Appetizing steam, Fluffy texture, Mofan brand style --ar 4:5 --style raw --v 6.0
```

### 彩虹螺旋卷 (SKU-002)
```
/imagine prompt: Cross-section rainbow spiral roll, Five color layers, Pink strawberry, Yellow pumpkin, Green matcha, Purple taro, White milk, Light wood board, Layer translucency --ar 4:5 --style raw --v 6.0
```

---

## 图片命名规范

生成后请按以下规范重命名，方便管理:

```
hero-main.jpg           # Hero主图
hero-mobile.jpg         # Hero手机版
course-foundation.jpg   # Foundation课程
course-professional.jpg # Professional课程
course-immersion.jpg    # Immersion课程
product-001-cheese.jpg  # SKU-001
product-002-rainbow.jpg # SKU-002
...
story-chapter1.jpg      # 品牌故事1
story-chapter2.jpg      # 品牌故事2
story-chapter3.jpg      # 品牌故事3
story-heritage.jpg      # 文化传承
journal-flour.jpg       # 面粉测评
journal-etsy.jpg        # Etsy创业
journal-compliance.jpg  # 合规指南
journal-kids.jpg        # 亲子食谱
```

---

## 图片优化处理

生成后建议使用以下工具优化:

### 1. 压缩 (必做)
- **工具**: TinyPNG (tinypng.com) 或 Squoosh (squoosh.app)
- **目标**: < 200KB (Hero), < 100KB (产品)
- **格式**: 转为 WebP

### 2. 调色 (可选)
- **工具**: Lightroom 或 Photopea (免费)
- **调整**: 统一色温 5500K, 增加清晰度 +10

### 3. 裁剪 (按需)
- **工具**: 任何图片编辑器
- **比例**: 确保符合要求 (4:5, 16:9 等)

---

## CDN上传路径建议

如果使用CDN托管，建议路径结构:

```
https://cdn.mofan.art/images/
├── hero/
│   ├── main.webp
│   └── mobile.webp
├── courses/
│   ├── foundation.webp
│   ├── professional.webp
│   └── immersion.webp
├── products/
│   ├── sku-001.webp
│   ├── sku-002.webp
│   └── ...
├── story/
│   ├── chapter1.webp
│   ├── chapter2.webp
│   ├── chapter3.webp
│   └── heritage.webp
└── journal/
    ├── flour-guide.webp
    ├── etsy-journey.webp
    ├── compliance.webp
    └── kids-breakfast.webp
```

---

## 预计成本和时间

### 使用 Midjourney ($30/月)
- **生成速度**: 25张图约需 2-3小时
- **成本**: $30 (Standard Plan)
- **质量**: ★★★★★

### 使用 Leonardo.ai (免费)
- **生成速度**: 25张图约需 4-5小时 (受配额限制)
- **成本**: $0
- **质量**: ★★★★☆

### 使用 即梦AI (免费)
- **生成速度**: 25张图约需 3-4小时
- **成本**: $0
- **质量**: ★★★☆☆

---

## 质量检查清单

每张图生成后请检查:

- [ ] **构图**: 主体清晰，符合网格要求
- [ ] **风格**: B&W或高饱和，符合Neo-Editorial
- [ ] **品牌色**: 荧光青绿 #00D9C0 是否正确呈现
- [ ] **质感**: 食物纹理清晰，有食欲感
- [ ] **光影**: 45度侧逆光，有层次感
- [ ] **背景**: 不杂乱，突出主体
- [ ] **尺寸**: 符合要求的宽高比
- [ ] **清晰度**: 8k/4k，无模糊

---

## 替代方案: 实拍

如果AI生成效果不满意，建议找专业食物摄影师实拍:

### 预算参考:
- **学生摄影师**: ¥3,000-5,000 (11张SKU + Hero)
- **专业食物摄影**: ¥10,000-20,000
- **4A级别摄影**: ¥30,000+

### 推荐摄影师风格参考:
- 搜索: "food photography Vogue style"
- 搜索: "high contrast food photography"
- 参考: Aesop, Blue Bottle, Kinfolk 品牌视觉

---

## 紧急方案 (明天就要用)

如果明天就要上线，来不及生成所有图:

1. **先用现有Unsplash图上线** (已完成)
2. **标记替换清单**:
   ```
   // TODO: 替换为品牌专属图片
   // 优先级: Hero > 课程 > 产品
   ```
3. **逐步替换**: 每天生成2-3张，一周内完成

---

**建议**: 先花$30订阅Midjourney，用一天时间批量生成所有核心图片，这是性价比最高的方案。
