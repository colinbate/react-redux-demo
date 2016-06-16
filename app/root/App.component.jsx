import React from 'react';
import Counter from '../counter';

export default class App extends React.Component {
  render () {
    return (
      <div id="content">
        <h1>Book Shelf</h1>
        <Counter/>
      </div>
    );
  }
}
