import request from 'superagent';

export function getBooks () {
  return request.get('/api/books');
}
