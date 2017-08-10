import React from 'react'
import Book from './Book'

const BookShelf = ({title, books, handleBookShelfChange}) => {
  return (
    <div className="bookShelf">
      <h2 className="bookShelf-title">{title}</h2>
      <div className="booksShelf-books">
        <ol className="books-grid">
          {books.map((book,index) => (
            <li key={index}>
              <Book
                book={book}
                handleBookShelfChange={handleBookShelfChange}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default BookShelf
