import request from 'superagent';

export function getBooks () {
  return request.get('/api/books');
}

export function updateBook (book) {
  return request.put(`/api/book/${book.id}`)
    .send(book)
    .then(res => res.body);
}

export function addBook (book) {
  return request.post('/api/book').send(book);
}
