import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, Gamepad2, Moon, Play, Sparkles } from 'lucide-react'

const questions = [
  {
    prompt: 'What mood guides the evening?',
    answer:
      'A soft late-night romance: taro shadows, pink lamplight, quiet scenes, and a sense that every answer arrives like a whispered subplot.',
  },
  {
    prompt: 'How does the story unfold?',
    answer:
      'Visitors move from cinematic silhouettes into a hand-drawn garden, where each question draws a fine line between memory, curiosity, and possibility.',
  },
  {
    prompt: 'Why the green tree motif?',
    answer:
      'The tree acts as the page narrator. Its branches hold small decisions, delicate paths, and the feeling of a conversation slowly becoming alive.',
  },
  {
    prompt: 'What should guests do first?',
    answer:
      'Choose the question that feels closest to their night. The page responds with a small scene, keeping the interaction intimate and unhurried.',
  },
]

const stills = [
  { title: 'Window light', className: 'still still-one' },
  { title: 'Quiet frame', className: 'still still-two' },
  { title: 'Moon scene', className: 'still still-three' },
]

function CharacterIllustration() {
  return (
    <svg className="character-art" viewBox="0 0 260 300" role="img" aria-label="Minimal character illustration">
      <path className="character-shadow" d="M53 254c37 28 129 31 164 1 13-12 2-29-27-35-43-9-109-4-136 11-16 9-17 15-1 23Z" />
      <path className="dress" d="M108 112c-30 38-44 83-52 131 37 20 102 20 141 1-6-54-23-99-54-132-10-11-25-11-35 0Z" />
      <path className="coat" d="M91 126c-16 37-22 74-22 118 17 8 36 12 57 12-8-38-10-82 1-140-14-4-27 0-36 10Z" />
      <circle className="face" cx="127" cy="73" r="32" />
      <path className="hair" d="M95 74c-2-39 54-57 82-20 9 12 9 32-2 48-10-19-26-21-49-17-16 3-26-1-31-11Z" />
      <path className="arm" d="M91 151c-27 19-43 39-50 60" />
      <path className="arm" d="M166 150c31 14 51 32 61 56" />
      <path className="star-line" d="M39 208c25 7 46 4 64-10" />
      <path className="star-line" d="M197 198c18-2 33 2 45 13" />
      <circle className="tiny-star" cx="43" cy="207" r="4" />
      <circle className="tiny-star" cx="239" cy="210" r="4" />
    </svg>
  )
}

function TreeMotif() {
  return (
    <svg className="tree-motif" viewBox="0 0 540 470" role="img" aria-label="Hand drawn green tree motif">
      <path className="connection-line" d="M268 246 C188 178 143 127 102 63" />
      <path className="connection-line" d="M274 236 C342 168 397 125 459 81" />
      <path className="connection-line" d="M266 277 C191 303 129 337 74 401" />
      <path className="connection-line" d="M282 278 C354 305 414 338 477 408" />
      <circle className="node" cx="101" cy="64" r="7" />
      <circle className="node" cx="459" cy="81" r="7" />
      <circle className="node" cx="74" cy="401" r="7" />
      <circle className="node" cx="477" cy="408" r="7" />
      <path className="trunk" d="M263 402c17-54 16-95 6-140-8-38 6-72 34-101" />
      <path className="trunk thin" d="M268 291c-20-34-47-57-83-73" />
      <path className="trunk thin" d="M276 271c39-12 72-33 99-64" />
      <path className="canopy canopy-a" d="M190 151c-33-33-17-82 28-88 18-43 83-44 102-4 49 1 73 54 43 91 20 38-11 82-55 75-26 30-78 25-96-10-41 3-65-32-49-64Z" />
      <path className="canopy canopy-b" d="M138 227c-25-32-7-76 34-80 15-32 67-36 88-8 38-1 63 36 48 70 24 26 9 70-31 75-23 27-67 24-87-2-36 10-71-18-52-55Z" />
      <path className="canopy canopy-c" d="M286 226c-16-41 17-79 57-70 22-31 74-21 86 15 42 5 57 57 27 85 9 38-31 67-66 47-30 18-71 4-80-29-32-4-48-27-24-48Z" />
      <circle className="leaf-dot" cx="240" cy="116" r="5" />
      <circle className="leaf-dot" cx="337" cy="142" r="4" />
      <circle className="leaf-dot" cx="205" cy="225" r="4" />
      <circle className="leaf-dot" cx="384" cy="231" r="5" />
    </svg>
  )
}

function GameView() {
  return (
    <main className="game-shell">
      <div className="game-bar">
        <a className="game-back" href="#questions">
          <ArrowLeft size={17} />
          Back to landing page
        </a>
      </div>
      <iframe className="game-frame" src="/game/index.html" title="心理画像探索游戏" />
    </main>
  )
}

export default function App() {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [hash, setHash] = useState<string>(window.location.hash)
  const current = questions[activeQuestion]

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash)

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  if (hash === '#game') {
    return <GameView />
  }

  return (
    <main className="dream-page">
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="night-sky" />
        <nav className="topbar" aria-label="Primary navigation">
          <a className="brand-mark" href="#top" aria-label="Nocturne home">
            <Moon size={18} />
            <span>Nocturne</span>
          </a>
          <a className="nav-link" href="#questions">Ask the scene</a>
          <a className="nav-link" href="#game">Start game</a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Midnight cinema garden</span>
            <h1 id="hero-title">A romantic landing page that answers back.</h1>
            <p>
              Drift through soft purple stills, tender character sketches, and a pink wavy garden where every question lights a different branch.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#questions">
                <Play size={17} fill="currentColor" />
                Begin the Q&A
              </a>
              <a className="secondary-action" href="#game">
                <Gamepad2 size={17} />
                Start game
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Circular movie stills and character art">
            <div className="orbital-ring" />
            {stills.map((still) => (
              <article className={still.className} key={still.title}>
                <span>{still.title}</span>
              </article>
            ))}
            <CharacterIllustration />
          </div>
        </div>

        <svg className="wave-bottom" viewBox="0 0 1440 180" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 82 C185 168 334 7 524 78 C706 146 834 185 1046 93 C1228 14 1326 66 1440 116 L1440 180 L0 180 Z" />
        </svg>
      </section>

      <section className="garden-section" id="questions" aria-labelledby="question-title">
        <div className="garden-inner">
          <div className="section-heading">
            <span className="eyebrow sage">Interactive Q&A</span>
            <h2 id="question-title">Choose a question and watch the story branch.</h2>
          </div>

          <div className="question-stage">
            <div className="tree-panel">
              <TreeMotif />
            </div>

            <div className="qa-panel">
              <div className="question-list" role="tablist" aria-label="Story questions">
                {questions.map((item, index) => (
                  <button
                    className={activeQuestion === index ? 'question-tab active' : 'question-tab'}
                    type="button"
                    role="tab"
                    aria-selected={activeQuestion === index}
                    aria-controls="answer-panel"
                    key={item.prompt}
                    onClick={() => setActiveQuestion(index)}
                  >
                    <span>0{index + 1}</span>
                    {item.prompt}
                  </button>
                ))}
              </div>

              <article className="answer-card" id="answer-panel" aria-live="polite">
                <Sparkles size={20} />
                <h3>{current.prompt}</h3>
                <p>{current.answer}</p>
                <button
                  className="next-button"
                  type="button"
                  onClick={() => setActiveQuestion((activeQuestion + 1) % questions.length)}
                >
                  Next scene
                  <ArrowRight size={16} />
                </button>
              </article>
            </div>
          </div>
        </div>

        <svg className="wave-bottom olive-wave" viewBox="0 0 1440 220" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 108 C177 28 333 151 505 98 C726 29 838 180 1045 113 C1217 57 1315 65 1440 21 L1440 220 L0 220 Z" />
        </svg>
      </section>

      <section className="base-section" aria-labelledby="base-title">
        <div className="base-content">
          <div>
            <span className="eyebrow muted">After the final reel</span>
            <h2 id="base-title">Slender notes for the dream archive.</h2>
          </div>
          <div className="note-grid">
            <p>Soft gradients keep the long page airy while the olive base gives the narrative a quiet landing.</p>
            <p>Fine typography, restrained spacing, and flat vector details preserve the vintage Morandi hush.</p>
            <p>The interaction remains simple, tactile, and intimate: one question, one answer, one small cinematic turn.</p>
          </div>
        </div>
      </section>

      <footer className="footer-anchor">
        <p>Copyright 2026 Nocturne Garden. All rights reserved.</p>
        <p>Fine-weight notes for quiet pages, late screenings, and questions asked after midnight.</p>
      </footer>
    </main>
  )
}
