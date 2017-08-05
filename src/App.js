import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import BookList from './components/BookList'
import BookSearch from './components/BookSearch'

import * as BooksAPI from './BooksAPI'
import './App.css'


class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books: books
      })
    })
  }

  selectBook = (book,shelf) => {
    BooksAPI.update(book,shelf)
    const currentBook = this.state.books.filter(b => b.id !== book.id)
    book.shelf = shelf

    this.setState({
      books: [...currentBook, book]
    })
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={props => (
            <BookList
              header="My Reads"
              books={this.state.books}
              selectBook={this.selectBook}
              />
          )} />

          <Route exact path='/search' render={props => (
            <BookSearch books={this.state.books} />
          )} />
        </Switch>
      </Router>
    )
  }
}

export default BooksApp
