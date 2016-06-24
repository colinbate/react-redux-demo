import React from 'react';
import NavLink from './NavLink.component';
import styles from './chrome.css';

export default class App extends React.Component {
  render () {
    return (
      <div id="content">
        <nav>
          <ul className="nav nav-tabs nav-pad">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
          </ul>
        </nav>
        <div className={styles.main}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
