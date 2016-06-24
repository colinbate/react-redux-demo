import React, {Component} from 'react';
import {Link} from 'react-router';

class About extends Component {
  render () {
    return (
      <div>
        <h1>About Book Shelf</h1>
        <p>A list of some books I've read.</p>
        <Link to="/">Back to the books</Link>
      </div>
    );
  }
}

export default About;
