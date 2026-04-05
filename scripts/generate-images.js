/**
 * MOFAN Image Generation Helper
 * 图片生成管理脚本
 * 
 * 使用方法:
 * node scripts/generate-images.js
 */

const prompts = {
  hero: [
    {
      id: 'hero-main',
      name: 'Hero主图 (B&W Dramatic)',
      priority: 'P0',
      prompt: 'Professional food photography, Mantou in bamboo steamer, Dramatic hard flash lighting, High contrast black and white, Steam rising, 45-degree angle, Extreme close-up, Sharp focus on texture, Dark moody background, Vogue editorial style, Grainy film texture, 8k, ultra detailed --ar 16:9 --style raw --v 6.0',
      usage: '首页Hero区域主图'
    },
    {
      id: 'hero-color',
      name: 'Hero彩色版',
      priority: 'P1',
      prompt: 'Editorial food photography, Artisan mantou collection, Electric teal accent #00D9C0, Steam wisps, Natural morning light, Bamboo steamer texture, High fashion magazine style, Saturated colors, Clean minimalist composition, 8k --ar 16:9 --style raw --v 6.0',
      usage: 'Hero备选彩色版'
    },
    {
      id: 'hero-mobile',
      name: 'Hero手机版',
      priority: 'P1',
      prompt: 'Mobile hero image, Hands shaping mantou dough, Dramatic side lighting, Black and white, Close-up of craftsmanship, Kinfolk magazine aesthetic, Film grain, Vertical composition, 8k --ar 9:16 --style raw --v 6.0',
      usage: '手机端Hero图'
    }
  ],
  courses: [
    {
      id: 'course-foundation',
      name: 'Foundation课程',
      priority: 'P0',
      prompt: 'Food styling photography, Three cute mantou on ceramic plate, Soft morning window light, Pastel tones, Family breakfast scene, Child-friendly aesthetic, Natural wood table, Minimalist Japanese style, Clean background #FAFAFA, 4:5 aspect ratio --ar 4:5 --style raw --v 6.0',
      usage: 'Foundation课程封面'
    },
    {
      id: 'course-professional',
      name: 'Professional课程',
      priority: 'P0',
      prompt: 'High-end food photography, Complex mantou art pieces, Dramatic chiaroscuro lighting, Professional kitchen setting, Chef hands detail, Multiple steamers stacked, Commercial photography style, Sharp shadows, Dark moody tones, 16:9 cinematic --ar 16:9 --style raw --v 6.0',
      usage: 'Professional课程封面'
    },
    {
      id: 'course-immersion',
      name: 'Immersion课程',
      priority: 'P0',
      prompt: 'Cultural documentary photography, Traditional Chinese kitchen, Elderly hands teaching mantou craft, Ancient steamer, Warm tungsten lighting, Xian architecture elements, Heritage craftsmanship, Atmospheric haze, 21:9 widescreen --ar 21:9 --style raw --v 6.0',
      usage: 'Immersion课程封面'
    }
  ],
  products: [
    {
      id: 'sku-001',
      name: 'SKU-001 芝士流心',
      priority: 'P0',
      prompt: 'Cut cheese lava mantou, Golden flowing mozzarella center, Steam rising softly, Bamboo steamer #D4A574, 45-degree top-down angle, Soft side light, Appetizing steam, Fluffy texture highlight --ar 4:5 --style raw --v 6.0',
      usage: '产品展示 - 引流款'
    },
    {
      id: 'sku-002',
      name: 'SKU-002 彩虹螺旋卷',
      priority: 'P0',
      prompt: 'Cross-section rainbow spiral roll, Five color layers visible, Pink strawberry #FFB6C1, Yellow pumpkin #FFE4B5, Green matcha #98D8C8, Purple taro #DDA0DD, White milk, Light wood cutting board, Layer translucency --ar 4:5 --style raw --v 6.0',
      usage: '产品展示 - 引流款'
    },
    {
      id: 'sku-003',
      name: 'SKU-003 兔兔包',
      priority: 'P0',
      prompt: 'Cute bunny-shaped mantou, Pale pink dough #FFB6C1, Long fluffy ears, Simple dot eyes, Yellow bamboo steamer, Cozy breakfast aesthetic, Child-friendly --ar 4:5 --style raw --v 6.0',
      usage: '产品展示 - 引流款'
    },
    {
      id: 'sku-004',
      name: 'SKU-004 奥利奥卷',
      priority: 'P1',
      prompt: 'Oreo chocolate swirl roll cross-section, Dark brown cocoa #4A3728, Cream white spiral layers, Oreo cookie crumb texture, Dark wood slate #2D3436, Sophisticated dessert aesthetic --ar 4:5 --style raw --v 6.0',
      usage: '产品展示 - 利润款'
    },
    {
      id: 'sku-005',
      name: 'SKU-005 全麦坚果卷',
      priority: 'P1',
      prompt: 'Whole wheat nut roll cross-section, Golden brown dough #C4A77D, Walnuts almonds embedded, Rustic texture, Natural linen napkin, Bamboo mat, Organic wholesome aesthetic --ar 4:5 --style raw --v 6.0',
      usage: '产品展示 - 利润款'
    },
    {
      id: 'sku-006',
      name: 'SKU-006 培根芝士卷',
      priority: 'P1',
      prompt: 'Bacon cheese savory roll cross-section, Golden brown seared exterior, Bacon bits melted cheese, Spiral pattern, Dark wood cutting board, Cheese sheen --ar 4:5 --style raw --v 6.0',
      usage: '产品展示 - 利润款'
    },
    {
      id: 'sku-007',
      name: 'SKU-007 龙年花馍',
      priority: 'P1',
      prompt: 'Intricate dragon-shaped huamo, Golden yellow #F4D03F, Detailed scales flowing mane, Celadon ceramic plate #A8DADC, Cultural heritage aesthetic, Artisan craftsmanship --ar 4:5 --style raw --v 6.0',
      usage: '产品展示 - 利润款'
    },
    {
      id: 'sku-008',
      name: 'SKU-008 中秋玉兔包',
      priority: 'P1',
      prompt: 'Mid-autumn jade rabbit bun cut open, Pale jade green #A8E6CF, Golden salted egg yolk lava flowing, Soft porcelain plate, Elegant festival aesthetic --ar 4:5 --style raw --v 6.0',
      usage: '产品展示 - 利润款'
    },
    {
      id: 'sku-009',
      name: 'SKU-009 仿真苹果',
      priority: 'P1',
      prompt: 'Hyper-realistic apple-shaped mantou, Shiny red glaze #D63031, Natural speckles, Green leaf accent #00B894, Woven bamboo basket, Trompe loeil art style --ar 4:5 --style raw --v 6.0',
      usage: '产品展示 - 旗舰款'
    },
    {
      id: 'sku-010',
      name: 'SKU-010 黑芝麻卷',
      priority: 'P1',
      prompt: 'Black sesame medicinal roll, Deep black dough #2D3436, White spiral contrast, Sesame seed texture, Bamboo mat, Zen wellness aesthetic --ar 4:5 --style raw --v 6.0',
      usage: '产品展示 - 旗舰款'
    },
    {
      id: 'sku-011',
      name: 'SKU-011 寿桃花馍',
      priority: 'P1',
      prompt: 'Longevity peach huamo, Pink gradient #FFB6C1 to #F8C8DC, Blooming flower top, Elevated ceramic stand, Gold leaf decoration #D4AF37, Celebration aesthetic --ar 4:5 --style raw --v 6.0',
      usage: '产品展示 - 旗舰款'
    }
  ],
  story: [
    {
      id: 'story-chapter1',
      name: '故事-Chapter1',
      priority: 'P1',
      prompt: 'Cinematic portrait, Asian woman entrepreneur at window, Dramatic natural light, Contemplative expression, Empty coffee cup, Film noir aesthetic --ar 4:5 --style raw --v 6.0',
      usage: '品牌故事-至暗时刻'
    },
    {
      id: 'story-chapter2',
      name: '故事-Chapter2',
      priority: 'P1',
      prompt: 'Documentary photography, Hands kneading dough, Natural kitchen light, Bamboo steamer first batch, Steam atmosphere, Authentic craftsmanship --ar 4:5 --style raw --v 6.0',
      usage: '品牌故事-第一笼馒头'
    },
    {
      id: 'story-chapter3',
      name: '故事-Chapter3',
      priority: 'P1',
      prompt: 'Group photography diverse women, Mantou workshop, Collaborative atmosphere, Natural candid moment, Warm lighting, Community empowerment --ar 16:9 --style raw --v 6.0',
      usage: '品牌故事-从一个人到一群人'
    },
    {
      id: 'story-heritage',
      name: '故事-文化传承',
      priority: 'P1',
      prompt: 'Cultural heritage photography, Traditional Chinese kitchen, Elderly master teaching, Ancient steamer techniques, Warm tungsten lighting, Intergenerational knowledge --ar 4:3 --style raw --v 6.0',
      usage: '品牌故事-文化传承'
    }
  ],
  journal: [
    {
      id: 'journal-flour',
      name: '博客-面粉测评',
      priority: 'P2',
      prompt: 'Flat lay photography, Flour brands comparison, King Arthur Bobs Red Mill, Measuring cups, Baking ingredients layout, Clean white marble --ar 16:9 --style raw --v 6.0',
      usage: '博客文章配图'
    },
    {
      id: 'journal-etsy',
      name: '博客-Etsy创业',
      priority: 'P2',
      prompt: 'Lifestyle photography, Home office workspace, Laptop Etsy shop, Handmade packaging boxes, Natural window light, Entrepreneur workspace --ar 16:9 --style raw --v 6.0',
      usage: '博客文章配图'
    },
    {
      id: 'journal-compliance',
      name: '博客-合规指南',
      priority: 'P2',
      prompt: 'Minimalist flat lay, Legal documents permits, Cottage food license, Clean organized desk, Professional aesthetic --ar 16:9 --style raw --v 6.0',
      usage: '博客文章配图'
    },
    {
      id: 'journal-kids',
      name: '博客-亲子食谱',
      priority: 'P2',
      prompt: 'Family lifestyle photography, Mother child making mantou, Kitchen counter activity, Joyful moment, Colorful ingredients, Warm atmosphere --ar 16:9 --style raw --v 6.0',
      usage: '博客文章配图'
    }
  ]
};

// 输出统计
function printStats() {
  console.log('\n========== 图片生成统计 ==========\n');
  
  let total = 0;
  let p0 = 0, p1 = 0, p2 = 0;
  
  for (const [category, items] of Object.entries(prompts)) {
    console.log(`${category.toUpperCase()}: ${items.length} 张`);
    total += items.length;
    
    items.forEach(item => {
      if (item.priority === 'P0') p0++;
      else if (item.priority === 'P1') p1++;
      else if (item.priority === 'P2') p2++;
    });
  }
  
  console.log('\n--------------------------------');
  console.log(`总计: ${total} 张`);
  console.log(`P0 (必须): ${p0} 张`);
  console.log(`P1 (重要): ${p1} 张`);
  console.log(`P2 (可选): ${p2} 张`);
  console.log('================================\n');
}

// 输出指定优先级的提示词
function printByPriority(priority) {
  console.log(`\n========== ${priority} 优先级图片 ==========\n`);
  
  for (const [category, items] of Object.entries(prompts)) {
    const filtered = items.filter(item => item.priority === priority);
    if (filtered.length > 0) {
      console.log(`\n## ${category.toUpperCase()}\n`);
      filtered.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name}`);
        console.log(`   用途: ${item.usage}`);
        console.log(`   提示词:\n   ${item.prompt}\n`);
      });
    }
  }
}

// 生成Markdown检查清单
function generateChecklist() {
  console.log('\n# 图片生成检查清单\n');
  console.log('复制以下内容，生成一张勾一张:\n');
  
  for (const [category, items] of Object.entries(prompts)) {
    console.log(`\n## ${category.toUpperCase()}`);
    items.forEach(item => {
      console.log(`- [ ] ${item.name} (${item.priority}) - ${item.usage}`);
    });
  }
}

// 主程序
const command = process.argv[2];

switch (command) {
  case 'stats':
    printStats();
    break;
  case 'p0':
    printByPriority('P0');
    break;
  case 'p1':
    printByPriority('P1');
    break;
  case 'p2':
    printByPriority('P2');
    break;
  case 'checklist':
    generateChecklist();
    break;
  default:
    console.log(`
MOFAN 图片生成管理脚本

使用方法:
  node scripts/generate-images.js [command]

命令:
  stats      - 显示图片统计
  p0         - 显示P0优先级提示词(必须生成)
  p1         - 显示P1优先级提示词(重要)
  p2         - 显示P2优先级提示词(可选)
  checklist  - 生成Markdown检查清单

示例:
  node scripts/generate-images.js stats
  node scripts/generate-images.js p0 > p0-prompts.txt
`);
}
