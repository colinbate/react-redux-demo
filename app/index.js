import {render} from 'react-dom';
import React from 'react';
import {Root} from './root';
import configureStore from './configureStore';

const store = configureStore();
window.store = store;
const load = () => {
  render(
    <Root store={store} />,
    document.querySelector('#app')
  );
};

if (document.readyState !== 'complete') {
  document.addEventListener('DOMContentLoaded', load);
} else {
  load();
}
