export default (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
      //return [...state, action.item];
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

export const getCount = (state) => state;
