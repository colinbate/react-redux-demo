import {combineReducers} from 'redux';
import shelf, * as fromShelf from '../shelf/shelf.reducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  shelf,
  form: formReducer
});

export default rootReducer;

// export const getShelf = (state) => fromShelf.getShelf(state.shelf);
