'use client'

import { useState } from 'react'
import { vietnamesePhrases, VietnamesePhrase } from '../data/phrases'

export default function Home() {
  const [currentPhrase, setCurrentPhrase] = useState<VietnamesePhrase | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const getRandomPhrase = () => {
    setIsLoading(true)
    
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * vietnamesePhrases.length)
      const newPhrase = vietnamesePhrases[randomIndex]
      
      if (currentPhrase && newPhrase.id === currentPhrase.id) {
        const nextIndex = (randomIndex + 1) % vietnamesePhrases.length
        setCurrentPhrase(vietnamesePhrases[nextIndex])
      } else {
        setCurrentPhrase(newPhrase)
      }
      
      setIsLoading(false)
    }, 500)
  }

  return (
    <main className="container">
      <h1 className="title">🇻🇳 Vietnamese Phrases</h1>
      <p className="subtitle">
        Learn useful Vietnamese phrases for daily conversation!
      </p>

      {currentPhrase ? (
        <div className="phrase-card fade-in">
          <div className="vietnamese">{currentPhrase.vietnamese}</div>
          <div className="phonetic">{currentPhrase.phonetic}</div>
          <div className="english">{currentPhrase.english}</div>
          <div style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.7 }}>
            Category: {currentPhrase.category}
          </div>
        </div>
      ) : (
        <div className="phrase-card">
          <div style={{ fontSize: '1.2rem', color: '#6b7280' }}>
            Click the button below to discover a Vietnamese phrase!
          </div>
        </div>
      )}

      <button 
        className={`button ${isLoading ? 'loading' : ''}`}
        onClick={getRandomPhrase}
        disabled={isLoading}
      >
        {isLoading ? '🔄 Loading...' : '✨ Show New Phrase'}
      </button>

      <div style={{ 
        marginTop: '3rem', 
        padding: '1rem', 
        fontSize: '0.9rem', 
        color: '#6b7280',
        textAlign: 'left',
        maxWidth: '600px',
        margin: '3rem auto 0'
      }}>
        <h3 style={{ marginBottom: '1rem', color: '#374151' }}>💡 Tips for Learning:</h3>
        <ul style={{ lineHeight: '1.6' }}>
          <li>• Try to repeat the phonetic pronunciation out loud</li>
          <li>• Use these phrases in daily conversations with Vietnamese speakers</li>
          <li>• Practice writing the Vietnamese characters</li>
          <li>• Learn the cultural context behind each phrase</li>
        </ul>
      </div>
    </main>
  )
}