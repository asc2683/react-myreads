import React, { Component } from 'react'
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

  handleBookShelfChange = (book, shelf) => {
    if (book.shelf !== shelf) {
      BooksAPI.update(book, shelf).then(() => {
        book.shelf = shelf

        // filter out tje book and append it to the end of the list
        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat([book])
        }))
      })
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={props => (
            <BookList
              header="My Reads"
              books={this.state.books}
              handleBookShelfChange={this.handleBookShelfChange}
              />
          )} />

          <Route exact path='/search' render={props => (
            <BookSearch
              handleBookShelfChange={this.handleBookShelfChange}
            />
          )} />
        </Switch>
      </Router>
    )
  }
}

export default BooksApp
