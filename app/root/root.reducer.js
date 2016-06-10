import {combineReducers} from 'redux';
import counter, * as fromCounter from '../counter/counter.reducer';

const rootReducer = combineReducers({
  counter
});

export default rootReducer;

export const getCount = (state) => fromCounter.getCount(state.counter);
