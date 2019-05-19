import React, {Component} from 'react'
import Shelves from './Shelves';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'

class HomePage extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onHandleShelfChange: PropTypes.func.isRequired
  };

  render() {
    const {books, onHandleShelfChange} = this.props;
    return (
      <div className='list-books'>
        <div>
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <Shelves books={books} onHandleShelfChange={onHandleShelfChange} />
        </div>
        <Link className='open-search' to='/search'>
          <button>Add a book</button>
        </Link>
      </div>
    )
  }
}

export default HomePage
