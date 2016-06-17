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

  handle (values, dispatch) {
    console.log(values);
  }

  render () {
    const {shelf} = this.props;
    return (
      <div>
        <AddBook onSubmit={this.handle}/>
        {shelf.map(book => <Book key={book.id} {...book}/>)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  shelf: state.shelf
});

export default connect(mapStateToProps, actions)(Shelf);
