// src/index.ts
import express from 'express';
import http from 'http';
import path from 'path';
import https from 'https';
import { attachWebSocketProxy } from './proxy';

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

const server = http.createServer(app);

app.use('/v1/convai', (req, res) => {
  const targetUrl = `https://api.elevenlabs.io${req.originalUrl}`;
  const proxyReq = https.request(targetUrl, {
    method: req.method,
    headers: {
      ...req.headers,
      host: 'api.elevenlabs.io'
    }
  }, proxyRes => {
    res.writeHead(proxyRes.statusCode || 500, proxyRes.headers);
    proxyRes.pipe(res, { end: true });
  });

  req.pipe(proxyReq, { end: true });

  proxyReq.on('error', (err) => {
    console.error('Proxy error:', err);
    res.status(500).send('Proxy request failed');
  });
});

// Serve arquivos estáticos (ex: ai.js)
app.use(express.static(path.join(__dirname, '..', 'public')));

// Serve qualquer arquivo estático solicitado diretamente da pasta public
app.get('*', (req, res, next) => {
  const filePath = path.join(__dirname, '..', 'public', req.path);
  res.sendFile(filePath, err => {
    if (err) {
      next();
    }
  });
});

// WebSocket proxy
attachWebSocketProxy(server);

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});