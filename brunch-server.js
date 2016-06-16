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
    status: 'unknown',
    image: 'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',
    rating: 0,
    ratingCount: 0,
    lastRead: ''
  };

  app.get('/api/books', (req, res) => {
    // res.set('Content-Type', 'application/json');
    res.json(database);
  });

  app.post('/api/book', (req, res) => {
    const book = req.body;
    if (!book.title || !book.author) {
      return res.sendStatus(400);
    }
    const id = {id: shortid.generate()};
    const record = Object.assign(id, bookDefaults, book);
    database.push(record);
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
