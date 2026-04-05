import React, { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
// 使用本地真实案例图片
const caseImages = {
  case1: '/images/1.jpg',
  case2: '/images/2.jpg', 
  case3: '/images/3.jpg',
  case4: '/images/4.jpg'
}

// 文章详情内容
const articleContents = {
  zh: {
    1: {
      title: '从濒临破产到月入6万：40岁烘焙老师傅如何用1个爆款视频逆袭',
      content: `
## 01 困境：40万设备，日营业额却从万元跌至千元

李师傅今年40岁，经营烘焙行业已经整整10年。3家面包店，40万的设备投资，曾经的他意气风发。然而近两年，生意急转直下。

"以前一天营业额能过万，现在好的时候也就千把块。"李师傅回忆道。更让他焦虑的是，竞争对手在他对面开了一家新中式馒头店，日营业额竟然能到6000+。

他的店成了"僵尸店"——开着没生意，关了又舍不得。

## 02 转机：1万成本的新中式馒头项目

一个偶然的机会，李师傅在网上看到了馍范商学院的新中式馒头课程。

"说实话，一开始我是抵触的。"李师傅坦言，"我做了10年烘焙，还要跟一个90后学做馒头？"

但眼看着店铺一天天亏损，他决定试一试。1万多的启动成本，对他来说已经是最后的赌注。

## 03 蜕变：从"老师傅"到"小学生"

报名的第一天，李师傅就受到了冲击。

"我原以为做馒头很简单，没想到里面这么多门道。"从面粉配比到发酵时间，从造型手法到蒸制火候，每一个细节都有讲究。

更让他意外的是私域运营课程。"我做了10年生意，从来没想过朋友圈还能这么发。"

## 04 爆发：1条视频，100万播放

学成之后，李师傅开始在短视频平台分享他的馒头制作过程。

"第一条视频就爆了。"李师傅笑着说。那条展示"彩虹千层馒头"制作过程的视频，播放量突破了100万。

评论区全是问"哪里买""怎么学"的留言。他的微信瞬间被加爆，第一天就收到了50多个订单。

## 05 现在：月入6万，筹备第4家店

如今的李师傅，已经彻底转型。3家面包店全部增加了馒头产品线，月营业额稳定在6万以上。

"我现在最后悔的，就是没早点学。"李师傅说，"如果早半年，我可能已经开第5家店了。"

---

**学员档案**
- 姓名：李师傅
- 年龄：40岁
- 原行业：烘焙10年
- 学习周期：30天
- 目前状态：月入6万+，筹备第4家店
      `
    },
    2: {
      title: '58岁幼儿园长的第二人生：30年教育经验如何变身私域变现利器',
      content: `
## 01 危机：双减+出生率下降，58岁园长面临关门

王园长今年58岁，从事幼教工作已经30年。她经营的幼儿园曾经满员，如今却只剩下不到一半的学生。

"双减政策加上出生率下降，我的幼儿园快撑不下去了。"王园长叹息道。30年心血，眼看着要付诸东流。

更让她焦虑的是，58岁的年龄，即使想转行，还有谁会要？

## 02 转机：一句话打动几千位妈妈

在朋友的推荐下，王园长了解到了馍范商学院的新中式馒头项目。

"我一开始是拒绝的，"王园长笑着说，"我都58了，还学什么做馒头？"

但当导师告诉她，30年的幼教经验，恰恰是私域运营的最大优势时，她心动了。

"你培养了1万个孩子，就意味着你认识1万个家长。这是多少钱都买不到的信任资产。"

## 03 学习：从园长到"馒头阿姨"

报名后，王园长展现出了惊人的学习力。

"我把当年办幼儿园的那股劲头拿出来了。"每天凌晨4点起床练习，白天运营朋友圈，晚上复盘总结。

她的朋友圈文案，每一条都击中家长的心：

"今天给曾经的学生做了他们最爱的卡通馒头，看到孩子们吃得开心，我又找回了当初当园长的成就感。"

## 04 爆发：私域裂变，月入20万+

第一个月，王园长的朋友圈就引爆了。

曾经的家长纷纷下单，还主动帮她转发。"王园长做的馒头，我们放心！"这句话成了最好的广告。

3个月过去，她的月收入突破了20万。更重要的是，她找到了人生的新方向。

## 05 现在：带更多幼教人转型

如今的王园长，不仅自己做得风生水起，还成为了馍范商学院的助教，专门帮助幼教同行转型。

"我想告诉所有焦虑的幼教人，58岁都可以重新开始，你们更可以。"

---

**学员档案**
- 姓名：王园长
- 年龄：58岁
- 原行业：幼教30年
- 学习周期：45天
- 目前状态：月入20万+，帮助同行转型
      `
    },
    3: {
      title: '00后女孩用压岁钱创业：6条视频涨粉3000，她做对了什么？',
      content: `
## 01 质疑：父母说她是"做梦"

小雨今年22岁，大学刚毕业。当她说要用压岁钱学做馒头创业时，父母的反应是："你做梦吧？"

"他们觉得我不务正业，"小雨说，"但我真的不想过朝九晚五的生活。"

顶着家人的质疑，她偷偷拿了8000块压岁钱，报名了馍范商学院的课程。

## 02 学习："特种兵式训练"

小雨的学习强度让导师都惊讶。

"我每天只睡4个小时，"小雨说，"白天学技术，晚上学运营，周末还跟着导师去摆摊实践。"

她的笔记本密密麻麻记满了要点，手机相册里全是练习的照片。

"我知道自己没经验，只能用努力来弥补。"

## 03 转折点：妈妈主动帮忙拍视频

第6天，小雨发了一条做"星空馒头"的视频，意外收获了第一个爆款。

"那天晚上我妈妈主动来问我，要不要她帮忙拍视频。"小雨回忆时眼眶微红，"我知道，她终于认可我了。"

从那以后，妈妈成了她的专职摄影师，爸爸负责后勤，全家人都支持她的事业。

## 04 爆发：6条视频，涨粉3000

小雨的视频风格清新可爱，完美契合00后的审美。

"我不说教，只分享，"小雨说，"让大家看到一个真实的创业过程，有成功也有失败。"

6条视频后，她的粉丝突破了3000，开始接到订单。

## 05 现在：月入6万，成为家族骄傲

如今的小雨，月收入稳定在6万以上。

"现在我爸妈逢人就夸我，"小雨笑着说，"说我有出息，比上班强多了。"

她计划年底开自己的工作室，还带动了身边几个同学一起创业。

---

**学员档案**
- 姓名：小雨
- 年龄：22岁
- 背景：应届毕业生
- 启动资金：8000元压岁钱
- 学习周期：21天
- 目前状态：月入6万，筹备工作室
      `
    },
    4: {
      title: '为什么你的馒头卖不动？90%的人忽略了这个私域成交秘诀',
      content: `
## 01 问题：产品再好，朋友圈发不对也是白搭

很多学员问我："老师，我的馒头做得挺好的，为什么就是卖不出去？"

我问他们："你朋友圈怎么发的？"

看了他们的朋友圈，我找到了问题——要么不发，要么发得像微商广告。

## 02 秘诀：从"被动等单"到"主动成交"

私域运营的核心不是卖产品，而是建立信任。

我们总结了5步私域转化法则：

**第一步：展示真实的自己**
不要只发产品，要发你的故事。你是谁？为什么做馒头？你的初心是什么？

**第二步：展示制作过程**
让用户看到食物的诞生过程。干净的环境、新鲜的食材、用心的手法，这些都是信任的基石。

**第三步：展示客户反馈**
真实的客户好评胜过千言万语。截图、视频、复购记录，都是最好的广告。

**第四步：制造稀缺感**
限时、限量、限定，让用户有紧迫感。"今天只做50个，先到先得"。

**第五步：引导行动**
每条朋友圈都要有明确的行动指令。"想要的扣1""扫码加微信""点击链接下单"。

## 03 案例：转化率提升300%

学员张姐，按照这5步法改造朋友圈后，转化率提升了300%。

"我以前一天发10条广告都没人理，现在发3条生活分享，就有几十个人来问。"

## 04 核心：卖的是信任，不是馒头

记住，私域成交的核心是信任。

当客户信任你这个人，他们就会信任你的产品。当你的朋友圈成为一个有温度、有故事、有价值的存在，成交就会自然而然发生。

---

**结语**

私域运营不是一蹴而就的，需要持续经营和用心维护。但只要你掌握了正确的方法，哪怕从零开始，也能在短时间内建立信任，实现成交。

想了解更多私域运营技巧？关注馍范商学院，获取更多干货分享。
      `
    }
  },
  en: {
    1: {
      title: 'From Bankruptcy to $8K/Month: How a 40-Year-Old Baker Turned One Viral Video Into Success',
      content: `
## 01 The Crisis: $55K Investment, Revenue Plummeting

Master Li is 40 years old with 10 years of baking experience. Three bakeries, $55K in equipment investment—he once had it all. But in the past two years, business took a nosedive.

"We used to make thousands a day; now we're lucky to hit a few hundred." Master Li recalls. What worried him more was the competitor across the street—a traditional Chinese mantou shop making $800+ daily.

His shops became "zombie stores"—open but empty, yet too painful to close.

## 02 The Turning Point: A $1,400 Investment

By chance, Master Li discovered MOFAN Business School's new-style mantou course online.

"Honestly, I was resistant at first," Master Li admits. "I've been baking for 10 years. Now I need to learn mantou from someone younger?"

But watching his losses mount daily, he decided to try. The $1,400 startup cost was his final bet.

## 03 The Transformation: From "Master" to "Student"

On day one, Master Li was shocked.

"I thought mantou was simple. I never realized there were so many nuances." From flour ratios to fermentation times, from shaping techniques to steaming heat—every detail mattered.

What surprised him most was the private domain marketing course. "I've been in business for 10 years and never knew you could use social media this way."

## 04 The Breakthrough: 1 Video, 1 Million Views

After completing the course, Master Li started sharing his mantou-making process on short video platforms.

"The first video went viral," Master Li smiles. The video showing his "Rainbow Layered Mantou" process hit 1 million views.

Comments flooded in: "Where can I buy?" "How do I learn?" His WeChat exploded with 50+ orders on day one.

## 05 Today: $8K/Month, Planning Store #4

Today, Master Li has completely transformed. All three bakeries now feature mantou products, generating $8K+ monthly.

"My biggest regret is not starting sooner," Master Li says. "If I had started six months earlier, I might be opening my fifth store now."

---

**Student Profile**
- Name: Master Li
- Age: 40
- Background: 10 years in baking
- Learning Period: 30 days
- Current Status: $8K+/month, planning 4th store
      `
    },
    2: {
      title: 'A Kindergarten Principal\'s Second Act at 58: How 30 Years of Education Became a Monetization Goldmine',
      content: `
## 01 The Crisis: Policy Changes and Declining Birth Rates

Principal Wang is 58 with 30 years in early childhood education. Her kindergarten was once fully enrolled; now it's less than half full.

"Policy changes plus declining birth rates—my kindergarten is barely surviving," Principal Wang sighs. Three decades of work, seemingly wasted.

What worried her more: at 58, who would hire her even if she wanted to switch careers?

## 02 The Opportunity: One Sentence That Changed Everything

Through a friend's recommendation, Principal Wang discovered MOFAN Business School's mantou program.

"I initially refused," Principal Wang laughs. "I'm 58. Why would I learn to make mantou?"

But when her mentor told her that 30 years of education experience was actually her greatest asset for private domain marketing, she was intrigued.

"You've educated 10,000 children, meaning you know 10,000 parents. That's trust money can't buy."

## 03 The Learning: From Principal to "Mantou Auntie"

Principal Wang showed incredible dedication.

"I approached it with the same energy I had when opening my kindergarten." Up at 4 AM daily to practice, managing social media by day, reviewing progress at night.

Her social media posts resonated deeply with parents:

"Today I made cartoon mantou for my former students. Seeing their happy faces, I rediscovered the fulfillment I felt as a principal."

## 04 The Breakthrough: Private Domain Explosion, $28K+/Month

In her first month, Principal Wang's social media presence exploded.

Former parents ordered immediately and actively shared her posts. "Principal Wang's mantou—we trust it!" became the best advertisement.

Three months in, her monthly income exceeded $28K. More importantly, she found a new direction in life.

## 05 Today: Helping Fellow Educators Transform

Today, Principal Wang not only runs her own successful business but also serves as a teaching assistant at MOFAN Business School, helping fellow educators transition.

"I want to tell all anxious educators: if 58-year-old me can start over, so can you."

---

**Student Profile**
- Name: Principal Wang
- Age: 58
- Background: 30 years in education
- Learning Period: 45 days
- Current Status: $28K+/month, helping peers transition
      `
    },
    3: {
      title: 'Gen Z Girl\'s Lucky Money Startup: 3K Followers in 6 Videos. Here\'s What She Did Right',
      content: `
## 01 The Skepticism: Parents Called Her "Dreaming"

Xiaoyu is 22, fresh out of university. When she said she wanted to use her lucky money to learn mantou and start a business, her parents' response was: "You must be dreaming."

"They thought I wasn't being realistic," Xiaoyu says. "But I really didn't want a 9-to-5 life."

Despite family skepticism, she secretly used $1,100 of her lucky money to enroll in MOFAN Business School.

## 02 The Learning: "Special Forces Training"

Xiaoyu's intensity surprised even her mentors.

"I slept only 4 hours a day," Xiaoyu says. "Learning techniques by day, marketing by night, and practicing at stalls on weekends."

Her notebook was filled with notes; her phone gallery packed with practice photos.

"I knew I had no experience. I had to make up for it with effort."

## 03 The Turning Point: Mom Became Her Videographer

On day 6, Xiaoyu posted a video making "Galaxy Mantou" that unexpectedly became her first hit.

"That night, my mom asked if she could help film videos," Xiaoyu recalls with tears in her eyes. "I knew she finally approved."

From then on, her mom became her dedicated videographer, her dad handled logistics, and the whole family supported her business.

## 04 The Breakthrough: 6 Videos, 3K Followers

Xiaoyu's fresh, cute video style perfectly matched Gen Z aesthetics.

"I don't lecture, I just share," Xiaoyu says. "Showing the real entrepreneurial journey—successes and failures."

After 6 videos, her followers exceeded 3,000, and orders started coming in.

## 05 Today: $8K/Month, Family Pride

Today, Xiaoyu earns a stable $8K+ monthly.

"Now my parents brag about me to everyone," Xiaoyu smiles. "They say I'm doing better than a regular job."

She plans to open her own studio by year-end and has inspired several classmates to start their own businesses.

---

**Student Profile**
- Name: Xiaoyu
- Age: 22
- Background: Fresh graduate
- Startup Capital: $1,100 lucky money
- Learning Period: 21 days
- Current Status: $8K/month, planning studio
      `
    },
    4: {
      title: 'Why Your Mantou Isn\'t Selling? 90% Miss This Private Domain Secret',
      content: `
## 01 The Problem: Great Product, Wrong Marketing

Many students ask me: "My mantou is good quality. Why isn't it selling?"

I ask them: "How do you post on social media?"

Looking at their feeds, I find the problem—either they don't post, or they post like spammy salespeople.

## 02 The Secret: From Passive Waiting to Active Selling

Private domain marketing isn't about selling products; it's about building trust.

We've summarized a 5-step conversion formula:

**Step 1: Show Your True Self**
Don't just post products. Post your story. Who are you? Why mantou? What's your motivation?

**Step 2: Show the Process**
Let customers see how the food is made. Clean environment, fresh ingredients, careful technique—these build trust.

**Step 3: Show Customer Feedback**
Real testimonials speak louder than any ad. Screenshots, videos, repeat purchase records—these are your best marketing.

**Step 4: Create Scarcity**
Time limits, quantity limits, exclusive offers—create urgency. "Only making 50 today, first come first served."

**Step 5: Call to Action**
Every post needs a clear action prompt. "Comment if interested," "Scan to add me," "Click to order."

## 03 The Results: 300% Conversion Increase

Student Sister Zhang, after applying these 5 steps, saw her conversion rate increase by 300%.

"I used to post 10 ads a day with no response. Now 3 lifestyle posts bring dozens of inquiries."

## 04 The Core: Selling Trust, Not Mantou

Remember, private domain marketing is about trust.

When customers trust you as a person, they'll trust your products. When your social media presence becomes warm, story-driven, and valuable, sales happen naturally.

---

**Conclusion**

Private domain marketing isn't instant—it requires consistent effort and genuine care. But with the right approach, even starting from zero, you can build trust and drive sales quickly.

Want to learn more private domain marketing techniques? Follow MOFAN Business School for more insights.
      `
    }
  }
}

const Journal = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const revealRefs = useRef([])
  const [selectedArticle, setSelectedArticle] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  // 真实案例文章 - 4A策划总监改写版
  const articles = [
    {
      id: 1,
      title: language === 'zh' 
        ? '从濒临破产到月入6万：40岁烘焙老师傅如何用1个爆款视频逆袭' 
        : 'From Bankruptcy to $8K/Month: How a 40-Year-Old Baker Turned One Viral Video Into Success',
      category: language === 'zh' ? '学员故事' : 'Success Stories',
      excerpt: language === 'zh'
        ? '40岁，3家面包店，40万设备投资，日营业额却从万元暴跌至千元。竞争对手日进6000+，他的店成了"僵尸店"。直到遇见这个1万成本的新中式馒头项目...'
        : 'At 40, with 3 bakeries and $55K in equipment, daily revenue crashed from thousands to mere hundreds. When competitors made $800+/day, his shops became "zombie stores." Then he discovered this $1,400 mantou business...',
      date: '2026.04.01',
      readTime: language === 'zh' ? '8分钟阅读' : '8 min read',
      image: caseImages.case1,
      featured: true,
      author: language === 'zh' ? '李师傅 · 烘焙10年' : 'Master Li · 10 Years Baking',
      result: language === 'zh' ? '单条视频100万播放' : '1M Views on One Video'
    },
    {
      id: 2,
      title: language === 'zh'
        ? '58岁幼儿园长的第二人生：30年教育经验如何变身私域变现利器'
        : 'A Kindergarten Principal\'s Second Act at 58: How 30 Years of Education Became a Monetization Goldmine',
      category: language === 'zh' ? '转型案例' : 'Transformation',
      excerpt: language === 'zh'
        ? '"我培养了1万个孩子，却没培养好自己的事业。"双减政策+出生率下降，58岁园长面临关门危机。直到她用这句话打动了几千位妈妈...'
        : '"I educated 10,000 children but failed my own business." Facing closure due to policy changes, this 58-year-old principal discovered one sentence that moved thousands of mothers...',
      date: '2026.03.25',
      readTime: language === 'zh' ? '12分钟阅读' : '12 min read',
      image: caseImages.case2,
      featured: false,
      author: language === 'zh' ? '王园长 · 30年教培' : 'Principal Wang · 30 Years Ed',
      result: language === 'zh' ? '月入20万+' : '$28K+/Month'
    },
    {
      id: 3,
      title: language === 'zh'
        ? '00后女孩用压岁钱创业：6条视频涨粉3000，她做对了什么？'
        : 'Gen Z Girl\'s Lucky Money Startup: 3K Followers in 6 Videos. Here\'s What She Did Right',
      category: language === 'zh' ? '新手必读' : 'Beginner Guide',
      excerpt: language === 'zh'
        ? '父母说她是"做梦"，她却偷偷拿压岁钱报了名。从被家人质疑到妈妈主动帮忙拍视频，这个00后女孩如何用"特种兵式训练"6条视频变现？'
        : 'Parents called her "dreaming," but she secretly used her lucky money to enroll. From family skepticism to her mother helping film videos—how did this Gen Z girl monetize in just 6 videos?',
      date: '2026.03.18',
      readTime: language === 'zh' ? '15分钟阅读' : '15 min read',
      image: caseImages.case3,
      featured: false,
      author: language === 'zh' ? '小雨 · 应届生' : 'Xiaoyu · Fresh Graduate',
      result: language === 'zh' ? '月入6万' : '$8K/Month'
    },
    {
      id: 4,
      title: language === 'zh'
        ? '为什么你的馒头卖不动？90%的人忽略了这个私域成交秘诀'
        : 'Why Your Mantou Isn\'t Selling? 90% Miss This Private Domain Secret',
      category: language === 'zh' ? '运营干货' : 'Business Tips',
      excerpt: language === 'zh'
        ? '产品再好，不会发朋友圈也是白搭。从"被动等单"到"主动成交"，揭秘月销20万+学员都在用的5步私域转化法则...'
        : 'Great products mean nothing without good marketing. Discover the 5-step private domain conversion formula used by students making $28K+/month...',
      date: '2026.03.10',
      readTime: language === 'zh' ? '6分钟阅读' : '6 min read',
      image: caseImages.case4,
      featured: false,
      author: language === 'zh' ? '馍范商学院' : 'MOFAN Business School',
      result: language === 'zh' ? '转化率提升300%' : '300% Conversion Boost'
    }
  ]

  const featuredArticle = articles.find(a => a.featured)
  const regularArticles = articles.filter(a => !a.featured)

  const openArticle = (article) => {
    setSelectedArticle(article)
    document.body.style.overflow = 'hidden'
  }

  const closeArticle = () => {
    setSelectedArticle(null)
    document.body.style.overflow = 'auto'
  }

  // 获取文章完整内容
  const getArticleContent = (articleId) => {
    return articleContents[language]?.[articleId]?.content || ''
  }

  // 获取文章完整标题
  const getArticleTitle = (articleId) => {
    return articleContents[language]?.[articleId]?.title || ''
  }

  // 格式化内容为HTML
  const formatContent = (content) => {
    return content
      .split('\n\n')
      .map((paragraph, index) => {
        if (paragraph.startsWith('## ')) {
          return `<h2 key=${index} style="font-size: 1.25rem; font-weight: 600; margin: 2rem 0 1rem; color: #111; font-family: 'Noto Serif SC', serif;">${paragraph.replace('## ', '')}</h2>`
        } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
          return `<h3 key=${index} style="font-size: 1rem; font-weight: 600; margin: 1.5rem 0 0.75rem; color: #00D9C0;">${paragraph.replace(/\*\*/g, '')}</h3>`
        } else if (paragraph.startsWith('- ')) {
          return `<li key=${index} style="margin: 0.5rem 0; padding-left: 1.5rem; position: relative;"><span style="position: absolute; left: 0; color: #00D9C0;">•</span>${paragraph.replace('- ', '')}</li>`
        } else if (paragraph === '---') {
          return `<hr key=${index} style="border: none; border-top: 1px solid #e5e5e5; margin: 2rem 0;" />`
        } else {
          return `<p key=${index} style="line-height: 1.8; margin: 1rem 0; color: #4b5563;">${paragraph}</p>`
        }
      })
      .join('')
  }

  return (
    <div>
      {/* Hero Section */}
      <section style={{ position: 'relative', minHeight: '50vh', display: 'flex', alignItems: 'center', backgroundColor: '#FAFAFA' }}>
        <div className="container" style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
          <div style={{ maxWidth: '56rem' }}>
            <span 
              className="reveal-element" 
              ref={addToRefs}
              style={{ 
                fontSize: '0.75rem', 
                fontFamily: 'Roboto Mono, monospace',
                color: '#00D9C0',
                textTransform: 'uppercase',
                letterSpacing: '0.3em',
                display: 'block',
                marginBottom: '1.5rem'
              }}
            >
              Journal
            </span>
            <h1 
              className="reveal-element" 
              ref={addToRefs} 
              style={{ 
                transitionDelay: '0.1s',
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontFamily: '"Noto Serif SC", "Bodoni Moda", serif',
                marginBottom: '1.5rem',
                lineHeight: 1.2
              }}
            >
              {language === 'zh' ? '学员成功故事' : 'Success Stories'}
            </h1>
            <p 
              className="reveal-element" 
              ref={addToRefs} 
              style={{ 
                transitionDelay: '0.2s',
                fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                fontFamily: 'Bodoni Moda, serif',
                color: '#4b5563',
                fontWeight: 'normal',
                lineHeight: 1.5
              }}
            >
              {language === 'zh' 
                ? '真实案例，真实数据，真实的商业蜕变' 
                : 'Real cases, real data, real business transformations'}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section style={{ paddingTop: 0 }} className="section">
          <div className="container">
            <article 
              className="reveal-element"
              ref={addToRefs}
              style={{ cursor: 'pointer' }}
              onClick={() => openArticle(featuredArticle)}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 0 }}>
                <div style={{ aspectRatio: '4/3', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      filter: 'contrast(1.05)',
                      transition: 'all 0.7s'
                    }}
                    className="hover:scale-105"
                  />
                </div>
                <div style={{ 
                  backgroundColor: 'black', 
                  color: 'white', 
                  padding: '2.5rem', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center' 
                }} className="md:p-16">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <span style={{ 
                      fontSize: '0.75rem', 
                      fontFamily: 'Roboto Mono, monospace',
                      color: '#00D9C0',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em'
                    }}>
                      {featuredArticle.category}
                    </span>
                    <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
                    <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', fontFamily: 'Roboto Mono, monospace' }}>
                      {featuredArticle.date}
                    </span>
                  </div>
                  <h2 style={{ 
                    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', 
                    fontFamily: '"Noto Serif SC", "Bodoni Moda", serif',
                    marginBottom: '1.5rem',
                    lineHeight: 1.3
                  }}>
                    {featuredArticle.title}
                  </h2>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '2rem' }}>
                    {featuredArticle.excerpt}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <span style={{ fontSize: '0.875rem', fontFamily: 'Roboto Mono, monospace', color: 'rgba(255,255,255,0.4)' }}>
                        {featuredArticle.author}
                      </span>
                      <span style={{ 
                        display: 'block', 
                        fontSize: '1.25rem', 
                        fontFamily: 'Bodoni Moda, serif', 
                        color: '#00D9C0',
                        marginTop: '0.5rem'
                      }}>
                        {featuredArticle.result}
                      </span>
                    </div>
                    <span style={{ 
                      fontSize: '0.875rem', 
                      fontFamily: 'Roboto Mono, monospace',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: '#00D9C0'
                    }}>
                      {t.readMore} →
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {regularArticles.map((article, index) => (
              <article 
                key={article.id}
                className="reveal-element"
                ref={addToRefs}
                onClick={() => openArticle(article)}
                style={{ 
                  transitionDelay: `${index * 0.1}s`,
                  cursor: 'pointer',
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div style={{ aspectRatio: '16/10', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={article.image}
                    alt={article.title}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      filter: 'contrast(1.05)',
                      transition: 'all 0.7s'
                    }}
                  />
                </div>
                
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <span style={{ 
                      fontSize: '0.75rem', 
                      fontFamily: 'Roboto Mono, monospace',
                      color: '#00D9C0',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      {article.category}
                    </span>
                    <span style={{ color: '#e5e5e5' }}>·</span>
                    <span style={{ fontSize: '0.75rem', color: '#9ca3af', fontFamily: 'Roboto Mono, monospace' }}>
                      {article.date}
                    </span>
                  </div>
                  
                  <h2 style={{ 
                    fontSize: '1.25rem', 
                    fontFamily: '"Noto Serif SC", "Bodoni Moda", serif',
                    marginBottom: '0.75rem',
                    lineHeight: 1.4,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {article.title}
                  </h2>
                  
                  <p style={{ 
                    color: '#6b7280', 
                    lineHeight: 1.7, 
                    fontSize: '0.875rem',
                    marginBottom: '1rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {article.excerpt}
                  </p>
                  
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid #f3f4f6' }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>{article.author}</span>
                      <span style={{ 
                        display: 'block', 
                        fontSize: '1rem', 
                        fontFamily: 'Bodoni Moda, serif', 
                        color: '#00D9C0',
                        fontWeight: 'bold'
                      }}>
                        {article.result}
                      </span>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#9ca3af', fontFamily: 'Roboto Mono, monospace' }}>
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Article Modal */}
      {selectedArticle && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
          }}
          onClick={closeArticle}
        >
          <div 
            style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeArticle}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: 'rgba(0,0,0,0.1)',
                cursor: 'pointer',
                fontSize: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10
              }}
            >
              ×
            </button>

            {/* Article Image */}
            <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Article Content */}
            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <span style={{ 
                  fontSize: '0.75rem', 
                  fontFamily: 'Roboto Mono, monospace',
                  color: '#00D9C0',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  {selectedArticle.category}
                </span>
                <span style={{ color: '#e5e5e5' }}>·</span>
                <span style={{ fontSize: '0.875rem', color: '#9ca3af', fontFamily: 'Roboto Mono, monospace' }}>
                  {selectedArticle.date}
                </span>
                <span style={{ color: '#e5e5e5' }}>·</span>
                <span style={{ fontSize: '0.875rem', color: '#9ca3af', fontFamily: 'Roboto Mono, monospace' }}>
                  {selectedArticle.readTime}
                </span>
              </div>

              <h1 style={{
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontFamily: '"Noto Serif SC", "Bodoni Moda", serif',
                marginBottom: '1.5rem',
                lineHeight: 1.3,
                color: '#111'
              }}>
                {getArticleTitle(selectedArticle.id) || selectedArticle.title}
              </h1>

              <div 
                style={{ color: '#4b5563' }}
                dangerouslySetInnerHTML={{ __html: formatContent(getArticleContent(selectedArticle.id)) }}
              />

              {/* CTA Button */}
              <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e5e5e5', textAlign: 'center' }}>
                <p style={{ marginBottom: '1.5rem', color: '#6b7280' }}>
                  {language === 'zh' ? '想了解更多成功故事？立即报名开启你的创业之路' : 'Want to learn more success stories? Enroll now to start your journey'}
                </p>
                <button 
                  className="btn btn-primary"
                  onClick={() => {
                    closeArticle()
                    window.location.href = '/programs'
                  }}
                >
                  {language === 'zh' ? '查看课程' : 'View Programs'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter CTA */}
      <section style={{ backgroundColor: '#FAFAFA' }} className="section">
        <div className="container">
          <div className="reveal-element" ref={addToRefs} style={{ maxWidth: '32rem', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontFamily: '"Noto Serif SC", "Bodoni Moda", serif', marginBottom: '1rem', lineHeight: 1.3 }}>
              {language === 'zh' ? '订阅我们的日志' : 'Subscribe to Our Journal'}
            </h2>
            <p style={{ color: '#4b5563', marginBottom: '2rem', lineHeight: 1.75 }}>
              {language === 'zh' 
                ? '获取最新的技艺干货、学员故事和行业洞察' 
                : 'Get the latest techniques, success stories, and industry insights'}
            </p>
            <div style={{ display: 'flex', gap: '1rem', maxWidth: '28rem', margin: '0 auto' }}>
              <input 
                type="email" 
                placeholder={language === 'zh' ? '输入邮箱' : 'Enter your email'}
                style={{ 
                  flex: 1, 
                  padding: '1rem 1.25rem', 
                  border: '1px solid #e5e5e5', 
                  borderRadius: '4px',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.3s'
                }}
                onFocus={(e) => e.target.style.borderColor = '#00D9C0'}
                onBlur={(e) => e.target.style.borderColor = '#e5e5e5'}
              />
              <button className="btn btn-primary" style={{ whiteSpace: 'nowrap', padding: '1rem 2rem' }}>
                {language === 'zh' ? '订阅' : 'Subscribe'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Journal
