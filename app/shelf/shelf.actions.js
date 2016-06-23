import * as api from './api';

export const fetchBooks = () => dispatch => {
  dispatch({
    type: 'FETCH_BOOKS_STARTED'
  });
  return api.getBooks().then(
    response => {
      dispatch({
        type: 'FETCH_BOOKS_SUCCESS',
        response: response.body
      });
    },
    error => {
      dispatch({
        type: 'FETCH_BOOKS_FAILED',
        message: error.message || 'Something went wrong.'
      });
    }
  );
};

export const setStatus = (book, status) => dispatch => {
  const newBook = Object.assign({}, book, {status});
  dispatch({
    type: 'SET_STATUS_STARTED',
    book,
    status
  });
  return api.updateBook(newBook).then(
    returnedBook => {
      dispatch({
        type: 'SET_STATUS_SUCCESS',
        book: returnedBook
      });
    },
    () => {
      dispatch({
        type: 'SET_STATUS_FAILED'
      });
    }
  );
};

export const addBook = (book) => dispatch =>
  api.addBook(book).then(
    response => {
      dispatch({
        type: 'ADD_BOOK_SUCCESS',
        book: response.body
      });
    },
    () => {
      dispatch({
        type: 'ADD_BOOK_FAILED'
      });
    }
  );
