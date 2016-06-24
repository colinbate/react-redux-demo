import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import rootReducer from './root/root.reducer';

const configureStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(
        thunkMiddleware,
        promiseMiddleware
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  return store;
};

export default configureStore;
