const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const serveStatic = require('serve-static');
const shortid = require('shortid');

module.exports = (port, path, callback) => {
  const app = express();
  app.use(favicon(`${__dirname}/favicon.ico`));
  app.use(bodyParser.json());
  app.use(serveStatic(path));

  const database = require('./allbooks.json');
  const bookDefaults = {
    status: 'unread',
    image: 'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',
    rating: 0,
    ratingCount: 0,
    lastRead: ''
  };

  const isValid = book => book.title && book.author;

  app.get('/api/books', (req, res) => {
    res.json(database);
  });

  app.put('/api/book/:id', (req, res) => {
    const id = req.params.id;
    const update = req.body;
    update.id = id;
    const index = database.findIndex(b => b.id === id);
    if (index === -1) {
      return res.sendStatus(404);
    }
    if (!isValid(update)) {
      return res.sendStatus(400);
    }
    database[index] = Object.assign({}, bookDefaults, update);
    res.json(database[index]);
  });

  app.delete('/api/book/:id', (req, res) => {
    const id = req.params.id;
    const index = database.findIndex(b => b.id === id);
    if (index === -1) {
      return res.sendStatus(404);
    }
    database.splice(index, 1);
    res.sendStatus(204);
  });

  app.post('/api/book', (req, res) => {
    const book = req.body;
    if (!isValid(book)) {
      return res.sendStatus(400);
    }
    const id = {id: shortid.generate()};
    const record = Object.assign(id, bookDefaults, book);
    database.unshift(record);
    res.json(record);
  });

  app.get('*', (_, res) => res.sendFile(`${__dirname}/${path}/index.html`));

  console.log(`Server running on port ${port}`);
  const server =  app.listen(port);
  if (callback) {
    callback();
  }
  return server;
};
