import React from 'react'
import FlipBook from './components/FlipBook/FlipBook'
import './App.css'

function App() {
  const pages = [
    { id: 1, content: 'Cover Page', backgroundColor: '#1a1a1a' },
    { id: 2, content: 'Page 2', backgroundColor: '#f0f0f0' },
    { id: 3, content: 'Page 3', backgroundColor: '#e8e8e8' },
    { id: 4, content: 'Page 4', backgroundColor: '#f0f0f0' },
    { id: 5, content: 'Page 5', backgroundColor: '#e8e8e8' },
    { id: 6, content: 'Back Cover', backgroundColor: '#1a1a1a' },
  ]

  return (
    <div className="App">
      <FlipBook pages={pages} />
    </div>
  )
}

export default App
