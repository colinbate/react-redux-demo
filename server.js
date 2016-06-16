const server = require('./brunch-server');
const DEFAULT_PORT = 3333;
const port = process.env.PORT || DEFAULT_PORT;

server(port, 'public');
