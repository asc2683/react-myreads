import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

/*
  use functional component when neither state nor life-cycle method is used
*/

const BookList = (props) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>{props.header}</h1>
      </div>

      <div className="list-books-content">
        <BookShelf
          title="Currently Reading"
          books={props.books.filter((book) => book.shelf === "currentlyReading")}
          selectBook={props.selectBook}
        />
        <BookShelf
          title="Want to Read"
          books={props.books.filter((book) => book.shelf === "wantToRead")}
          selectBook={props.selectBook}

        />
        <BookShelf
          title="Read"
          books={props.books.filter((book) => book.shelf === "read")}
          selectBook={props.selectBook}
        />
      </div>
    </div>
  )
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
}

export default BookList
