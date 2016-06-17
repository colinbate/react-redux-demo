import React from 'react';
import Shelf from '../shelf';

export default class App extends React.Component {
  render () {
    return (
      <div id="content">
        <h1>Book Shelf</h1>
        <Shelf/>
      </div>
    );
  }
}
