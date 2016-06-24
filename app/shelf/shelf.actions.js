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
  const delta = {status};
  if (status === 'read') {
    // set lastRad to current date
    delta.lastRead = (new Date()).toDateString().replace(/^\w{3}\s(\w{3}\s\d\d).*(\d{4})$/, '$1, $2');
  }
  const newBook = Object.assign({}, book, delta);
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
