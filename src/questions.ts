export interface Question {
  id: number
  text: string
  category: '书相关' | '轻松有趣' | '回顾展望'
}

export const questions: Question[] = [
  // ── 📖 书相关（主线） ──
  {
    id: 1,
    text: '最近在读的一本书，它为什么在这个阶段吸引你？',
    category: '书相关',
  },
  {
    id: 2,
    text: '有没有一本你总是忍不住推荐给别人的书？为什么是它？',
    category: '书相关',
  },
  {
    id: 3,
    text: '最近读到哪一句话，让你停下来想了一会儿？',
    category: '书相关',
  },
  {
    id: 4,
    text: '你选书更像是在寻找答案，还是跟随好奇？',
    category: '书相关',
  },
  {
    id: 5,
    text: '有没有一本书读得很慢，但你知道它会一直陪着你？',
    category: '书相关',
  },
  {
    id: 6,
    text: '2026年，你最期待遇见的一本书是哪本？',
    category: '书相关',
  },
  {
    id: 7,
    text: '有没有一本书，你觉得"早一点读到会更好"？',
    category: '书相关',
  },

  // ── 🧊 轻松有趣（自然破冰） ──
  {
    id: 8,
    text: '最近有没有一个很小的瞬间，让你突然觉得生活很美好的？',
    category: '轻松有趣',
  },
  {
    id: 9,
    text: '如果财富自由，你最想把时间花在哪里？',
    category: '轻松有趣',
  },
  {
    id: 10,
    text: '你曾经做过最冒险的决定？',
    category: '轻松有趣',
  },

  // ── 🌱 2025回顾 × 年初氛围 ──
  {
    id: 11,
    text: '如果把2025年当成一本书，它的书名会是什么？',
    category: '回顾展望',
  },
  {
    id: 12,
    text: '回头看2025年，你觉得自己改变最大的是？',
    category: '回顾展望',
  },
  {
    id: 13,
    text: '去年有没有一本书，在某个阶段刚好陪着你？',
    category: '回顾展望',
  },
  {
    id: 14,
    text: '2026年，你希望自己多一点什么？',
    category: '回顾展望',
  },
  {
    id: 15,
    text: '最想在读书会获得什么？',
    category: '回顾展望',
  },
]

export const categoryConfig = {
  '书相关': { icon: '📖', color: '#a50c22' },
  '轻松有趣': { icon: '🧊', color: '#c6a668' },
  '回顾展望': { icon: '🌱', color: '#2b2b2b' },
} as const
