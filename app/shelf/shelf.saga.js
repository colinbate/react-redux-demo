import * as api from './api';
import {takeLatest} from 'redux-saga';
import {call, put} from 'redux-saga/effects';

function* fetchBooks () {
  try {
    const response = yield call(api.getBooks);
    yield put({type: 'FETCH_BOOKS_SUCCESS', response: response.body});
  } catch (err) {
    yield put({type: 'FETCH_BOOKS_FAILED', message: err.message || 'Failed to fetch book list.'});
  }
}

function* addBook (action) {
  console.log('Starting addBook saga with action', action);
  try {
    const response = yield call(api.addBook, action.payload);
    console.log('addBook saga success, putting ADD_BOOK_SUCCESS');
    yield put({type: 'ADD_BOOK_SUCCESS', book: response.body});
  } catch (err) {
    console.log('addBook saga failure, putting ADD_BOOK_FAILED', err);
    yield put({type: 'ADD_BOOK_FAILED', payload: {_error: err.message || 'Failed to add book.'}});
  }
}

function* setStatus (action) {
  console.log('setStatus saga with action', action);
  try {
    const response = yield call(api.updateBook, action.book);
    console.log('setStatus saga response body', response);
    yield put({type: 'SET_STATUS_SUCCESS', book: response});
  } catch (err) {
    yield put({type: 'SET_STATUS_FAILED', payload: {_error: err.message || 'Failed to update status.'}});
  }
}

function* watchFetchBooks () {
  yield* takeLatest('FETCH_BOOKS_STARTED', fetchBooks);
}

function* watchAddBook () {
  yield* takeLatest('ADD_BOOK_STARTED', addBook);
}

function* watchSetStatus () {
  yield* takeLatest('SET_STATUS_STARTED', setStatus);
}

export default [
  watchFetchBooks(),
  watchAddBook(),
  watchSetStatus()
];
