export const fetchBooks = () => ({
  type: 'FETCH_BOOKS_STARTED'
});

export const setStatus = (book, status) => {
  const delta = {status};
  if (status === 'read') {
    // set lastRead to current date
    delta.lastRead = (new Date()).toDateString().replace(/^\w{3}\s(\w{3}\s\d\d).*(\d{4})$/, '$1, $2');
  }
  const newBook = Object.assign({}, book, delta);
  return {
    type: 'SET_STATUS_STARTED',
    book: newBook,
    status
  };
};
