import React from 'react'
import Book from './Book'

/*
  use functional component when neither state nor life-cycle method is used
*/

const BookShelf = (props) => {
  return (
    <div className="bookShelf">
      <h2 className="bookShelf-title">{props.title}</h2>
      <div className="booksShelf-books">
        <ol className="books-grid">
          {props.books.map((book,index) => (
            <li key={index}>
              <Book
                book={book}
                onSelect={props.selectBook}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default BookShelf
