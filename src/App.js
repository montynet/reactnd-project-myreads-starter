import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route, Switch} from 'react-router-dom'
import SearchPage from './SearchPage'
import HomePage from './HomePage'
import NoRouteMatch from './NoRouteMatch'


class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState((prevState) => (
          {
            books
          }
        ))
      })
  }

  changeBookShelf(book, shelf) {
    BooksAPI.update(book, shelf)
      .then((response) => {
        //override the shelf of the book we're changing
        book.shelf = shelf;

        this.setState((prevState) => ({
          books: prevState.books.filter(b=>b.id !== book.id).concat(book)
        }));
      })
  }

  render() {

    const {books} = this.state;

    return (
      <div className='app'>
        <Switch>
          <Route exact path='/' render={
            () => (
              <HomePage
                books={books}
                onHandleShelfChange={
                  (book, shelf) => {
                    this.changeBookShelf(book, shelf)
                  }
                }
              />
            )
          }
          />
          <Route exact path='/search' render={
            () => (
              <SearchPage
                books={books}
                onHandleShelfChange={
                  (book, shelf) => {
                    this.changeBookShelf(book, shelf)
                  }
                }
              />
            )
          }/>
          <Route component={NoRouteMatch}/>
        </Switch>
      </div>
    )
  }
}

export default BooksApp
