export default (state = [], action) => {
  let prevIndex;
  switch (action.type) {
    case 'FETCH_BOOKS_SUCCESS':
      return action.response;
    case 'SET_STATUS_SUCCESS':
      prevIndex = state.findIndex(b => b.id === action.book.id);
      return [
        ...state.slice(0, prevIndex),
        action.book,
        ...state.slice(prevIndex + 1)
      ];
    case 'ADD_BOOK_SUCCESS':
      return [action.book, ...state];
    default:
      return state;
  }
};
