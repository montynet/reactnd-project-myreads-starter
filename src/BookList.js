import React, {Component} from 'react'
import Book from './Book'

class BookList extends Component {
  render(){
    const {books, onHandleShelfChange, oldBooks} = this.props;
    return (
      <ol className="books-grid">
        {books.map((book)=>(
          <Book key={book.id} bookName={book.title} bookAuthor={book.authors} bookImage={book.imageLinks ? book.imageLinks.thumbnail : ''}
                currentShelf={book.shelf} onHandleShelfChange={(shelf)=>(onHandleShelfChange(book, shelf))} book={book} books={books}
                oldBooks={oldBooks}
          />
        ))}
      </ol>
    )
  }
}

export default BookList
