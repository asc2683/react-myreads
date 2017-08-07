import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

/*
  use functional component when neither state nor life-cycle method is used
*/

const BookList = ({header,books, handleBookShelfChange}) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>{header}</h1>
      </div>

      <div className="list-books-content">
        <BookShelf
          title="Currently Reading"
          books={books.filter((book) => book.shelf === "currentlyReading")}
          handleBookShelfChange={handleBookShelfChange}
        />
        <BookShelf
          title="Want to Read"
          books={books.filter((book) => book.shelf === "wantToRead")}
          handleBookShelfChange={handleBookShelfChange}
        />
        <BookShelf
          title="Read"
          books={books.filter((book) => book.shelf === "read")}
          handleBookShelfChange={handleBookShelfChange}
        />
      </div>

      <div className="open-search">
        <Link to={'/search'}>Search</Link>
      </div>
    </div>
  )
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  handleBookShelfChange: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired
}

export default BookList
