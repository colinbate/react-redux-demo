import {createStore} from 'redux';
import rootReducer from './root/root.reducer';

const configureStore = () => {
  const store = createStore(
    rootReducer,
    module.hot && module.hot.data && module.hot.data.state || {}
  );

  // if (module.hot) {
  //   console.log('It is getting hot in here');
  //   module.hot.accept('./root/root.reducer', () => {
  //     console.log('accepting');
  //     store.replaceReducer(require('./root/root.reducer').default);
  //   });
  //   module.hot.accept();

  //   module.hot.dispose((data) => {
  //     data.state = store.getState();
  //     [].slice.apply(document.querySelector('#app').children).forEach(function (c) {
  //       c.remove();
  //     });
  //   });
  // }

  return store;
};

export default configureStore;
