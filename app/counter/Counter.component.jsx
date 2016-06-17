import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actions from './counter.actions';
import {getCount} from '../root/root.reducer';

const BaseCounter = ({count, increment, decrement}) => (
  <div>
    <h2>Redux Counter</h2>
    <p>
      <button className="btn btn-danger" onClick={decrement}>-</button>
      <span style={{padding: '1em'}}>{count}</span>
      <button className="btn btn-success" onClick={increment}>+</button>
    </p>
  </div>
);

BaseCounter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
};

const mapStateToProps = () => ({
  count: 0
});

export default connect(mapStateToProps, actions)(BaseCounter);
