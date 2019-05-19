import React, {Component} from 'react'
import BookList from './BookList'
import PropTypes from 'prop-types'

class Shelf extends Component {
  static propTypes = {
    shelfName: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired
  };

  render(){
    const {shelfName, books, onHandleShelfChange} = this.props;
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
          <BookList books={books} onHandleShelfChange={onHandleShelfChange} oldBooks={[]}/>
        </div>
      </div>
    )
  }

}

export default Shelf
