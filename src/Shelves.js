import React, {Component} from 'react'
import Shelf from './Shelf'

class Shelves extends Component {

  render(){
    const {books, onHandleShelfChange} = this.props;
    const currentlyReading = books.filter((book)=>(book.shelf === 'currentlyReading'));
    const read = books.filter((book)=>(book.shelf==='read'));
    const wantToRead = books.filter((book)=>(book.shelf==='wantToRead'));

    return (
      <div>
        <Shelf key='currentlyReading' shelfName='Currently Reading' books={currentlyReading} onHandleShelfChange={onHandleShelfChange}/>
        <Shelf key='wantToRead' shelfName='Want To Read' books={wantToRead} onHandleShelfChange={onHandleShelfChange}/>
        <Shelf key='read' shelfName='Read' books={read} onHandleShelfChange={onHandleShelfChange}/>
      </div>
    )
  }
}

export default Shelves
