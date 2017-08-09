import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

/*
  use functional stateless component when neither state nor life-cycle method is used
*/

const BookList = ({header, books, handleBookShelfChange}) => {
  const shelves = [
    {
      title: "Currently Reading",
      filter: "currentlyReading",
      key: 1
    },
    {
      title: "Want to Read",
      filter: "wantToRead",
      key: 2
    },
    {
      title: "Read",
      filter: "read",
      key: 3
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
            key={key}
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
