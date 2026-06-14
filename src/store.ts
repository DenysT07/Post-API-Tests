import type { Client, ClientInput } from './types.js';

const clients = new Map<string, Client>();
let nextId = 1;

export function addClient(data: ClientInput): Client {
  const client = {
    id: String(nextId++),
    ...data
  };

  clients.set(client.id, client);
  return client;
}

export function getClient(id: string): Client | undefined {
  return clients.get(id);
}

export function deleteClient(id: string): boolean {
  return clients.delete(id);
}
