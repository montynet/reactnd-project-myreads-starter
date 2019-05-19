import React from 'react'

const BookCover = props => (
  <div
    className="book-cover"
    style={{ width: 128, height: 193, backgroundImage: `url(${props.bookImage})` }}
  >
  </div>
);

export default BookCover
