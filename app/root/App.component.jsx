import React from 'react';
import Counter from '../counter';

export default class App extends React.Component {
  render () {
    return (
      <div id="content">
        <h1>Hello World</h1>
        <Counter/>
      </div>
    );
  }
}
