import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class BookList extends React.Component {
  render () {
    const { books } = this.props
    const currentlyReadingShelf = []
    const wantToReadShelf = []
    const readShelf = []

    Object.keys(books).map(key => {
      const book = books[key]

      if (book.shelf === 'currentlyReading') {
        currentlyReadingShelf.push(book)
      } else if (book.shelf === 'wantToRead') {
        wantToReadShelf.push(book)
      } else if (book.shelf === 'read'){
        readShelf.push(book)
      }

    })

    console.log('Currently reading: ' + currentlyReadingShelf)
    console.log('Want to read: ' + wantToReadShelf)
    console.log('Currently reading: ' + readShelf)


    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <h2 className="bookshelf-title">Currently Reading</h2>

        <ul>
          {Object.keys(currentlyReadingShelf).map(key => {
            const book3 = currentlyReadingShelf[key]
            return <li key={key}>{book3.title}</li>
          })}
        </ul>

        <h2 className="bookshelf-title">Want to Read</h2>

        <ul>
          {Object.keys(wantToReadShelf).map(key => {
            const book2 = wantToReadShelf[key]
            return <li key={key}>{book2.title}</li>
          })}
        </ul>

        <h2 className="bookshelf-title">Read</h2>

        <ul>
          {Object.keys(readShelf).map(key => {
            const book1 = readShelf[key]
            return <li key={key}>{book1.title}</li>
          })}
        </ul>

        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>

        <div>
          <Link to={'/search'}>Search</Link>
        </div>

      </div>
    )
  }
}

BookList.propTypes = {
  books: PropTypes.array.isRequired
}

export default BookList
