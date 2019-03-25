process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const express = require('express');
const next = require('next');
const compression = require('compression');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();
    server.set('trust proxy', 'loopback');
    server.disable('x-powered-by');

    // ====Optimization====
    server.use(compression());

    // next.js request handler
    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  });
