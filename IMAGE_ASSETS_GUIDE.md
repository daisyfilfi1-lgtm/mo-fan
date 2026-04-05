# MOFAN 品牌高定食物摄影资源指南

## 概述

本指南定义了馍范(MOFAN)品牌独立站的所有视觉资源规范，确保全站图片风格一致、专业、符合高定美食摄影标准。

## 摄影风格规范

### 核心美学
- **风格**: Neo-Editorial × High-Fashion Food Photography
- **对标**: Vogue美食大片、Dazed封面、System Magazine
- **色调**: 高对比度黑白 / 高饱和彩色
- **光影**: 硬闪光灯风格，戏剧性阴影

### 技术参数
```
滤镜参数:
- 默认: grayscale(100%) contrast(1.2) brightness(0.9)
- 悬停: 去除灰度，显示原色
- 过渡: duration-700, ease

图片比例:
- Hero: 16:9 或 21:9 (全出血)
- 课程卡片: 4:5 (竖版) 或 16:9 (横版)
- 产品: 1:1 (正方形) 或 2:1 (宽幅)
- 故事: 4:5 (竖版)
```

## 图片资源结构

```
src/utils/images.js
├── heroImages          # Hero区域大图
├── courseImages        # 课程封面图
├── productImages       # SKU产品图
│   ├── traffic        # 入门产品
│   ├── profit         # 进阶产品
│   └── flagship       # 大师产品
├── storyImages         # 品牌故事图
├── galleryImages       # 学员作品图
├── journalImages       # 博客文章图
└── testimonialImages   # 用户头像
```

## 各页面图片配置

### 1. Home 首页

| 位置 | 图片 | 风格 | 尺寸 |
|------|------|------|------|
| Hero主图 | `heroImages.main` | B&W高对比 | Full-bleed |
| Foundation课程 | `courseImages.foundation` | B&W → Color | 4:5 |
| Professional课程 | `courseImages.professional` | B&W → Color | 16:9 |
| Immersion课程 | `courseImages.immersion` | B&W → Color | 21:9 |

**悬停效果**: 默认高对比黑白，悬停显示彩色并放大105%

### 2. Products 产品展示

| SKU | 图片 | 类别 | 网格尺寸 |
|-----|------|------|----------|
| SKU-001 芝士流心 | `productImages.traffic.cheeseLava` | 入门 | 1:1 |
| SKU-002 彩虹螺旋卷 | `productImages.traffic.rainbowRoll` | 入门 | 1:1 |
| SKU-003 兔兔包 | `productImages.traffic.bunnyBun` | 入门 | 2:1 通栏 |
| SKU-004 奥利奥卷 | `productImages.profit.oreoRoll` | 进阶 | 1:1 |
| ... | ... | ... | ... |

**交互**: 悬停时显示彩色版本+荧光边框+信息浮层

### 3. About 品牌故事

| 章节 | 图片 | 处理方式 |
|------|------|----------|
| Chapter 1 至暗时刻 | `storyImages.chapter1` | B&W, 带装饰线框 |
| Chapter 2 第一笼馒头 | `storyImages.chapter2` | B&W, 暗色背景叠加 |
| Chapter 3 社群 | `storyImages.chapter3` | B&W |
| Heritage 文化传承 | `storyImages.heritage` | B&W, 右侧装饰框 |

### 4. Gallery 学员作品

- 9张精选学员作品
- 瀑布流布局(Masonry)
- 特定位置大图突出(第1、6位)
- 等级标签: Beginner(绿) / Advanced(蓝) / Master(金)

### 5. Journal 日志

| 文章 | 图片 | 布局 |
|------|------|------|
| 面粉指南 | `journalImages.flourGuide` | Featured 大图 |
| Etsy创业 | `journalImages.etsyJourney` | 卡片 |
| 合规指南 | `journalImages.compliance` | 卡片 |
| 亲子食谱 | `journalImages.kidsBreakfast` | 卡片 |

## 图片优化建议

### 生产环境部署前必须:

1. **替换Unsplash链接为自有CDN**
   ```javascript
   // 当前
   image: 'https://images.unsplash.com/photo-xxx'
   
   // 目标
   image: 'https://cdn.mofan.art/images/hero-main.jpg'
   ```

2. **图片压缩标准**
   - Hero图: WebP格式, 质量85%, max 200KB
   - 课程图: WebP格式, 质量80%, max 150KB
   - 产品图: WebP格式, 质量85%, max 100KB
   - 缩略图: WebP格式, 质量70%, max 50KB

3. **响应式图片**
   ```html
   <picture>
     <source srcSet="image-400w.webp 400w, image-800w.webp 800w" type="image/webp">
     <img src="image-800w.jpg" alt="...">
   </picture>
   ```

4. **Lazy Loading**
   - 首屏外图片添加 `loading="lazy"`
   - 使用Intersection Observer实现渐进加载

## 品牌专属摄影需求

### 待拍摄清单:

#### Hero区域 (优先级: 高)
- [ ] 蒸笼中冒着热气的花馍 (仰拍角度)
- [ ] 双手揉面的特写 (硬闪光,高对比)
- [ ] 晨光中的面团发酵过程 (延时摄影)

#### 课程展示 (优先级: 高)
- [ ] Foundation: 简单造型成品排列
- [ ] Professional: 复杂造型+工具摆拍
- [ ] Immersion: 西安实景+文化元素

#### 产品SKU (优先级: 中)
- [ ] 全部11款产品的专业食物摄影
- [ ] 每款3个角度: 整体/切面/细节
- [ ] 统一背景: 暖白/竹制/深色石板

#### 品牌故事 (优先级: 中)
- [ ] 创始人工作照 (自然光)
- [ ] 学员社群活动照
- [ ] 西安非遗传承人合作照

## 色彩校正参考

### 标准调色板:
```css
/* 高对比黑白 */
filter: grayscale(100%) contrast(1.2) brightness(0.9);

/* 悬停彩色 */
filter: saturate(1.1) contrast(1.05);

/* 暗色背景叠加 */
background: linear-gradient(to right, rgba(0,0,0,0.8), transparent);
```

## 使用示例

```jsx
import { heroImages, productImages } from '../utils/images'

// Hero使用
<img src={heroImages.main} alt="..." style={{ filter: 'grayscale(100%) contrast(1.2)' }} />

// 产品使用
<img src={productImages.flagship.appleBun} alt="..." />
```

## 更新日志

- 2026-04-05: 初始化图片资源规范
- 创建了统一的图片管理文件 `src/utils/images.js`
- 全站图片更新为高定食物摄影风格
- 实现了统一的悬停交互效果 (B&W → Color)

---

**注意**: 当前使用的是Unsplash专业食物摄影图片作为占位。正式上线前必须替换为品牌专属摄影图片，以保持品牌独特性和一致性。
