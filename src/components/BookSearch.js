import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'

class BookSearch extends Component {
  state = {
    searchResult: []
  }

  search = (event) => {
    BooksAPI.search(event.target.value, 25).then((booksFromSearch) => {
      const verifiedBooks = booksFromSearch.map(book => {
        this.props.books.forEach(bookOnShelf => {
          //check if the book is already on shelf
          if (book.id === bookOnShelf.id) {
            // if yes apply the shelf data to book from search
            book.shelf = bookOnShelf.shelf
          }
        })

        return book
      })

      this.setState({
        searchResult: verifiedBooks
      })
    })
  }

  render () {
    const { searchResult, handleBookShelfChange } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to={'/'}>Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.search}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchResult.map((book, index) => (
              <li key={index}>
                <Book
                  book={book}
                  handleBookShelfChange={this.props.handleBookShelfChange}
                />
              </li>
              ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookSearch
