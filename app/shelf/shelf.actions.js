import {getBooks} from './api';

export const fetchBooks = () => dispatch => {
  dispatch({
    type: 'FETCH_BOOKS_STARTED'
  });
  return getBooks().then(
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
