import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class BookSearch extends React.Component {
  render () {

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
        <div>
          <Link to={'/'}>Home</Link>
        </div>
      </div>
    )
  }
}

// BookSearch.propTypes = {
//   books: PropTypes.array.isRequired
// }

export default BookSearch
