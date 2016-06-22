import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './shelf.actions';
import Book from './Book.component';
import AddBook from './AddBook.component';

class Shelf extends Component {
  componentDidMount () {
    this.fetchData();
  }

  fetchData () {
    this.props.fetchBooks();
  }

  render () {
    const {shelf, setStatus, addBook} = this.props;
    return (
      <div>
        <AddBook onSubmit={addBook}/>
        {shelf.map(book => <Book key={book.id} {...book} onStatusChange={setStatus}/>)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  shelf: state.shelf
});

export default connect(mapStateToProps, actions)(Shelf);
