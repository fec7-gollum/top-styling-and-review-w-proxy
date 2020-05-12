const express = require('express');
const path = require('path');
const server = express();
const cors = require('cors')

const { createProxyMiddleware } = require('http-proxy-middleware');

server.use(cors());

server.use('/*', createProxyMiddleware({ target: 'localhost:3001', changeOrigin: true }));

server.use(express.static(path.join(__dirname, '../public/dist')));

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

// Server Requests

server.get('/*', (req, res) => {
  res.send('woot!')
})

// eslint-disable-next-line no-console
server.listen(5000, () => { console.log('server ON!'); });
