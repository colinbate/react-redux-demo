import request from 'superagent';

export function getBooks () {
  return request.get('/api/books');
}

export function setStatus (id, status) {
  return request.post(`/api/book/${id}/status`).send({status});
}

export function addBook (book) {
  return request.post('/api/book').send(book);
}
