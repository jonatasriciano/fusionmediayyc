// src/proxy.ts
import http from 'http';
import { WebSocketServer } from 'ws';
import { createProxyServer } from 'http-proxy';

const wsProxy = createProxyServer({
  target: 'wss://api.elevenlabs.io',
  changeOrigin: true,
  ws: true,
  secure: true,
});

export function attachWebSocketProxy(server: http.Server) {
  const wss = new WebSocketServer({ noServer: true });

  server.on('upgrade', (req, socket, head) => {
    if (req.url?.startsWith('/voice')) {
      // Redireciona para a ElevenLabs mantendo a query string
      req.url = `/v1/convai/conversation${req.url.replace('/voice', '')}`;
      wsProxy.ws(req, socket, head);
    }
  });
}