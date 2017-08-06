import React, { Component } from 'react'
import PropTypes from 'prop-types'

/*
  use class component when state or life-cycle method is used
*/

class Book extends Component {
  changeShelf = (shelf) => {
    this.props.onSelect(this.props.book, shelf)
    this.setState({
      shelf: shelf
    })
  }

  render() {
    const {title, authors, imageLinks, shelf} = this.props.book

    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${imageLinks && imageLinks.thumbnail})`
            }}>
          </div>
          <div className="book-shelf-changer">
            <select value={shelf} onChange={(e) => this.changeShelf(e.target.value)}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors && authors.map((author) => (author))}</div>
      </div>
    )
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
}

export default Book
