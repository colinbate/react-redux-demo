import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import rootReducer from './root/root.reducer';

const configureStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware,
      promiseMiddleware
    )
  );

  return store;
};

export default configureStore;
