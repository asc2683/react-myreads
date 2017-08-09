import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import { generateKey } from '../helpers'

/*
  use functional stateless component when neither state nor life-cycle method is used
*/

const BookList = ({header, books, handleBookShelfChange}) => {
  const shelves = [
    {
      title: "Currently Reading",
      filter: "currentlyReading",
    },
    {
      title: "Want to Read",
      filter: "wantToRead",
    },
    {
      title: "Read",
      filter: "read",
    }
  ]

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>{header}</h1>
      </div>

      <div className="list-books-content">
        {shelves.map(({title, filter, key}) =>
          <BookShelf
            key={generateKey()}
            title={title}
            books={books.filter((book) => book.shelf === filter)}
            handleBookShelfChange={handleBookShelfChange}
          />
        )}
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
