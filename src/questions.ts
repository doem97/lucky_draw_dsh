export interface Question {
  id: number
  text: string
  category: '阅读' | '有趣' | '年度回顾展望'
}

export const questions: Question[] = [
  // ── 阅读 ──
  {
    id: 1,
    text: '最近在读的一本书，它为什么在这个阶段吸引你？',
    category: '阅读',
  },
  {
    id: 2,
    text: '有没有一本你总是忍不住推荐给别人的书？为什么是它？',
    category: '阅读',
  },
  {
    id: 3,
    text: '最近读到哪一句话，让你停下来想了一会儿？',
    category: '阅读',
  },
  {
    id: 4,
    text: '你选书更像是在寻找答案，还是跟随好奇？',
    category: '阅读',
  },
  {
    id: 5,
    text: '有没有一本书读得很慢，但你知道它会一直陪着你？',
    category: '阅读',
  },
  {
    id: 6,
    text: '2026年，你最期待遇见的一本书是哪本？',
    category: '阅读',
  },
  {
    id: 7,
    text: '有没有一本书，你觉得"早一点读到会更好"？',
    category: '阅读',
  },
  {
    id: 8,
    text: '你有没有因为一本书，改变了某个具体的生活习惯？',
    category: '阅读',
  },
  {
    id: 9,
    text: '如果可以和一位作者共进晚餐，你会选谁？最想聊什么？',
    category: '阅读',
  },

  // ── 有趣 ──
  {
    id: 10,
    text: '最近有没有一个很小的瞬间，让你突然觉得生活很美好？',
    category: '有趣',
  },
  {
    id: 11,
    text: '如果财富自由，你最想把时间花在哪里？',
    category: '有趣',
  },
  {
    id: 12,
    text: '你曾经做过最冒险的决定是什么？',
    category: '有趣',
  },
  {
    id: 13,
    text: '如果明天醒来可以拥有一种新能力，你希望是什么？',
    category: '有趣',
  },
  {
    id: 14,
    text: '你生活中有什么小小的"仪式感"？',
    category: '有趣',
  },
  {
    id: 15,
    text: '最近有没有一首歌在单曲循环？它触动了你什么？',
    category: '有趣',
  },
  {
    id: 16,
    text: '你觉得自己最像哪个虚构角色？为什么？',
    category: '有趣',
  },
  {
    id: 17,
    text: '最近学会的一个新技能或新知识是什么？',
    category: '有趣',
  },

  // ── 年度回顾展望 ──
  {
    id: 18,
    text: '如果把2025年当成一本书，它的书名会是什么？',
    category: '年度回顾展望',
  },
  {
    id: 19,
    text: '回头看2025年，你觉得自己改变最大的是什么？',
    category: '年度回顾展望',
  },
  {
    id: 20,
    text: '去年有没有一本书，在某个阶段刚好陪着你？',
    category: '年度回顾展望',
  },
  {
    id: 21,
    text: '2026年，你希望自己多一点什么？',
    category: '年度回顾展望',
  },
  {
    id: 22,
    text: '最想在读书会获得什么？',
    category: '年度回顾展望',
  },
  {
    id: 23,
    text: '2025年你做的最正确的一个决定是什么？',
    category: '年度回顾展望',
  },
  {
    id: 24,
    text: '2026年，你想养成的一个新习惯是什么？',
    category: '年度回顾展望',
  },
  {
    id: 25,
    text: '如果给2026年的自己写一句话，你会写什么？',
    category: '年度回顾展望',
  },
]

export const categoryConfig = {
  '阅读': { icon: '📖', color: '#a50c22' },
  '有趣': { icon: '🧊', color: '#c6a668' },
  '年度回顾展望': { icon: '🌱', color: '#2b2b2b' },
} as const
