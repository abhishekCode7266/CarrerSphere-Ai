import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // --- API Routes ---
  
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'CareerSphere AI backend is running.' });
  });

  // Mock Payment Gateway Webhook Endpoint
  app.post('/api/payments/webhook', (req, res) => {
    console.log('Payment webhook received:', req.body);
    res.json({ received: true });
  });

  // Mock AI Chat Endpoint
  app.post('/api/ai/chat', (req, res) => {
    const { message } = req.body;
    res.json({ reply: `AI Assistant: I can help you with your career regarding "${message}". (This is a mock response from the server)` });
  });

  // --- Vite Middleware for Development ---
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production serving
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    // SPA fallback
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
