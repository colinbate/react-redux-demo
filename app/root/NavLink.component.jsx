import React from 'react';
import {Link} from 'react-router';

export default class NavLink extends React.Component {
  render () {
    const isActive = this.context.router.isActive(this.props.to, true),
          className = isActive ? 'active' : '';

    return (
      <li className={className}>
        <Link {...this.props}>
          {this.props.children}
        </Link>
      </li>
    );
  }
}

NavLink.contextTypes = {
  router: React.PropTypes.object
};
