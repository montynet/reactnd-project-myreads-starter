import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BookList from "./BookList";
import * as BooksAPI from './BooksAPI'


class SearchPage extends Component {
  state = {
    query: '',
    newBooks: [],
    searchError: false
  };

  updateQuery = (query) => {

    if (query) {
      this.setState((prevState) => ({
          query: query
        })
      );

      BooksAPI.search(query.trim())
        .then((results) => {
          Array.isArray(results) ?
            this.setState((prevState) => (
              {
                newBooks: results,
                searchError: false
              }
            )) :
            this.setState((prevState) => (
              {
                newBooks: [],
                searchError: true
              }
            ))
          }
        )
        .catch((e) => (
          // not sure if I would ever get here
          console.log(`Catched the error ${e}`)
        ))
    }else{
      this.setState(()=>({
        newBooks: [],
        searchError: false,
        query: ''
      }))
    }
  };

  render() {
    const {query, newBooks, searchError} = this.state;
    const {books, onHandleShelfChange} = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className='close-search' to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={query}
              placeholder="Search by title or author"
              onChange={(e) => this.updateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <BookList books={newBooks} oldBooks={books} onHandleShelfChange={onHandleShelfChange}/>
          </ol>
        </div>
        {searchError && (
          <h3 className='center'>Search did not return any books. Please try again!</h3>
        )}
      </div>
    )
  }
}


export default SearchPage
