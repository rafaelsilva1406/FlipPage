import React from 'react'
import './Page.css'

const Page = ({ content, backgroundColor, side, isFlipping, onClick }) => {
  return (
    <div
      className={`page page-${side} ${isFlipping ? 'flipping' : ''}`}
      style={{ backgroundColor }}
      onClick={onClick}
    >
      <div className="page-content">
        <h1>{content}</h1>
      </div>
    </div>
  )
}

export default Page
