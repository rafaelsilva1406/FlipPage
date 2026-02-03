import React, { useState } from 'react'
import Page from '../Page/Page'
import './FlipBook.css'

const FlipBook = ({ pages }) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)

  const nextPage = () => {
    if (currentPage < pages.length - 1 && !isFlipping) {
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(currentPage + 1)
        setIsFlipping(false)
      }, 600)
    }
  }

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(currentPage - 1)
        setIsFlipping(false)
      }, 600)
    }
  }

  return (
    <div className="flipbook-container">
      <div className="flipbook">
        {currentPage > 0 && (
          <Page
            content={pages[currentPage - 1]?.content}
            backgroundColor={pages[currentPage - 1]?.backgroundColor}
            side="left"
          />
        )}
        <Page
          content={pages[currentPage]?.content}
          backgroundColor={pages[currentPage]?.backgroundColor}
          side="right"
          isFlipping={isFlipping}
          onClick={nextPage}
        />
      </div>
      <div className="controls">
        <button onClick={prevPage} disabled={currentPage === 0 || isFlipping}>
          Previous
        </button>
        <span>
          Page {currentPage + 1} of {pages.length}
        </span>
        <button onClick={nextPage} disabled={currentPage === pages.length - 1 || isFlipping}>
          Next
        </button>
      </div>
    </div>
  )
}

export default FlipBook
