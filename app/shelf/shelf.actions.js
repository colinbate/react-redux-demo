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

export const setStatus = (id, status) => dispatch => {
  dispatch({
    type: 'SET_STATUS_STARTED',
    id,
    status
  });
  return api.setStatus(id, status).then(
    () => {
      dispatch({
        type: 'SET_STATUS_SUCCESS',
        id,
        status
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
