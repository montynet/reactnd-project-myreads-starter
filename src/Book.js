import React from 'react'
import ShelfChanger from './ShelfChanger'
import BookCover from './BookCover'

const Book = props => (
  <div className="book">
    <div className="book-top">
      <BookCover bookImage={props.bookImage}/>
      <div className="book-shelf-changer">
      <ShelfChanger currentSelection={props.currentShelf} book={props.book} books={props.books} oldBooks={props.oldBooks}
                    onHandleShelfChange={props.onHandleShelfChange} />
      </div>
    </div>
    <div className="book-title">{props.bookName}</div>
    <div className="book-authors">{props.bookAuthor}</div>
  </div>
);

export default Book
