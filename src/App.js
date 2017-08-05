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


class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: true
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={props => (
            <BookList books={this.state.books}/>
          )} />

          <Route exact path='/search' render={props => (
            <BookSearch />
          )} />
        </Switch>
      </Router>
    )
  }
}

export default BooksApp
