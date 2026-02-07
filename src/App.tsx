import { useState, useCallback, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { questions, categoryConfig, type Question } from './questions'

const COOLDOWN = 5

type CardState = 'idle' | 'rolling' | 'revealed'

export default function App() {
  const [history, setHistory] = useState<Question[]>([])
  const [current, setCurrent] = useState<Question | null>(null)
  const [cardState, setCardState] = useState<CardState>('idle')
  const [rollingText, setRollingText] = useState('')
  const cancelRef = useRef(false)
  const drawCountRef = useRef(0)

  // Exclude the last COOLDOWN drawn questions from the pool
  const recentIds = history.slice(-COOLDOWN).map((q) => q.id)
  const pool = questions.filter((q) => !recentIds.includes(q.id))

  const draw = useCallback(() => {
    if (pool.length === 0) return
    cancelRef.current = false
    setCardState('rolling')
    drawCountRef.current++
    const thisDrawCount = drawCountRef.current

    const idx = Math.floor(Math.random() * pool.length)
    const picked = pool[idx]

    const totalSteps = 16 + Math.floor(Math.random() * 6)
    let step = 0

    function tick() {
      if (cancelRef.current) return
      step++

      if (step < totalSteps) {
        const randomQ = questions[Math.floor(Math.random() * questions.length)]
        setRollingText(randomQ.text)

        const progress = step / totalSteps
        const delay = 50 + Math.pow(progress, 2.5) * 300
        setTimeout(tick, delay)
      } else {
        // Guard against stale draw landing after a reset
        if (drawCountRef.current !== thisDrawCount) return
        setCurrent(picked)
        setHistory((prev) => [...prev, picked])
        setCardState('revealed')
      }
    }

    tick()
  }, [pool])

  const reset = useCallback(() => {
    cancelRef.current = true
    setHistory([])
    setCurrent(null)
    setCardState('idle')
    setRollingText('')
  }, [])

  useEffect(() => {
    return () => { cancelRef.current = true }
  }, [])

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <img src="/dsh_long_v1.2.svg" alt="新加坡终身读书会" className="header-logo" />
        <h1 className="header-title">读书会破冰问题</h1>
        <div className="header-divider" />
        <p className="header-subtitle">2026 年第一场</p>
      </header>

      {/* Progress */}
      <div className="progress">
        <span>已抽 {history.length} 题</span>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${Math.min((history.length / questions.length) * 100, 100)}%` }}
          />
        </div>
        <span>共 {questions.length} 题</span>
      </div>

      {/* Card */}
      <div className="card-container">
        <motion.div
          className="card"
          animate={
            cardState === 'revealed'
              ? { boxShadow: '0 8px 48px rgba(43,43,43,0.12), 0 2px 16px rgba(43,43,43,0.06)' }
              : { boxShadow: '0 2px 32px rgba(43,43,43,0.08), 0 1px 8px rgba(43,43,43,0.04)' }
          }
          transition={{ duration: 0.4 }}
        >
          <div className="card-corner card-corner--tl" />
          <div className="card-corner card-corner--tr" />
          <div className="card-corner card-corner--bl" />
          <div className="card-corner card-corner--br" />

          <AnimatePresence mode="wait">
            {cardState === 'idle' && (
              <motion.div
                key="idle"
                className="card-idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="card-idle-icon">签</div>
                <div className="card-idle-text">点击下方抽取问题</div>
                <div className="card-idle-hint">共 {questions.length} 道破冰问题等你探索</div>
              </motion.div>
            )}

            {cardState === 'rolling' && (
              <motion.div
                key="rolling"
                className="rolling-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {rollingText || '...'}
              </motion.div>
            )}

            {cardState === 'revealed' && current && (
              <motion.div
                key={`q-${current.id}-${history.length}`}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div className={`category-tag category-tag--${current.category}`}>
                  <span>{categoryConfig[current.category].icon}</span>
                  <span>{current.category}</span>
                </div>
                <div className="question-number">
                  第 {current.id} 签
                </div>
                <div className="question-text">{current.text}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Buttons */}
      <div className="buttons">
        <button
          className="btn-draw"
          onClick={draw}
          disabled={cardState === 'rolling'}
        >
          {cardState === 'idle'
            ? '抽 签'
            : cardState === 'rolling'
              ? '抽签中…'
              : '再抽一签'}
        </button>
        {history.length > 0 && (
          <motion.button
            className="btn-reset"
            onClick={reset}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            重 置
          </motion.button>
        )}
      </div>

      {/* History */}
      <AnimatePresence>
        {history.length > 0 && (
          <motion.div
            className="history"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="history-title">已 抽 问 题</div>
            <div className="history-list">
              <AnimatePresence>
                {[...history].reverse().map((q, i) => (
                  <motion.div
                    key={`${history.length - i}-${q.id}`}
                    className="history-item"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i === 0 ? 0.1 : 0 }}
                  >
                    <span className="history-item-number">{history.length - i}</span>
                    <span className={`history-item-cat history-item-cat--${q.category}`}>
                      {categoryConfig[q.category].icon} {q.category}
                    </span>
                    <span className="history-item-text">{q.text}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="footer">
        新加坡终身读书会 &middot; A lifelong commitment to reading and growth.
      </footer>
    </div>
  )
}
