import express from 'express';
import { addClient, deleteClient, getClient } from './store.js';
import type { ClientInput } from './types.js';

export const app = express();

app.use(express.json());

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.post('/api/clients', (req, res) => {
  const data = req.body as Partial<ClientInput>;

  if (!data.phone || !data.lastName || !data.firstName) {
    return res.status(400).json({ message: 'Missing client data' });
  }

  const client = addClient({
    phone: data.phone,
    lastName: data.lastName,
    firstName: data.firstName
  });

  return res.status(200).json({ id: client.id });
});

app.get('/api/clients/:id', (req, res) => {
  const client = getClient(req.params.id);

  if (!client) {
    return res.status(404).json({ message: 'Client not found' });
  }

  return res.status(200).json(client);
});

app.delete('/api/clients/:id', (req, res) => {
  const deleted = deleteClient(req.params.id);

  if (!deleted) {
    return res.status(404).json({ message: 'Client not found' });
  }

  return res.status(200).json({ id: req.params.id });
});
