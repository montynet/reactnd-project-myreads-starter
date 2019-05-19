import React from 'react'

const ShelfChanger = props => {
    let currentShelf = 'none';

    /*
    Not proud of this :(
    I welcome feedback about managing state better. This was a bear for me
     */
    if(props.oldBooks.length > 0){
        for (let item of props.oldBooks) {
            if (item.id === props.book.id) {
                currentShelf = item.shelf
                break;
            }
        }
    }else{
        for (let item of props.books) {
            if (item.id === props.book.id) {
                currentShelf = item.shelf
                break;
            }
        }
    }

    return(
      <select value={currentShelf}
              onChange={(e)=>(props.onHandleShelfChange(e.target.value))}>
          <option value='moveTo' disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
      </select>
    );
};

export default ShelfChanger
