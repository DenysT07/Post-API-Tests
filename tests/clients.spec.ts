import { expect, test as it } from '@playwright/test';
import { client } from './data.js';
import { checkSchema } from './schema.js';
import { clientSchema, errorSchema, idSchema } from './schemas.js';

it.describe('Clients API', () => {
  it('creates, gets and deletes a client', async ({ request }) => {
    const createRes = await request.post('/api/clients', { data: client });

    expect(createRes.status()).toBe(200);

    const created = await createRes.json();
    checkSchema(idSchema, created);
    expect(created.id).toEqual(expect.any(String));

    const getRes = await request.get(`/api/clients/${created.id}`);

    expect(getRes.status()).toBe(200);
    const found = await getRes.json();
    checkSchema(clientSchema, found);
    expect(found).toEqual({
      id: created.id,
      ...client
    });

    const deleteRes = await request.delete(`/api/clients/${created.id}`);

    expect(deleteRes.status()).toBe(200);
    const deleted = await deleteRes.json();
    checkSchema(idSchema, deleted);
    expect(deleted).toEqual({ id: created.id });
  });

  it('returns 404 for missing client', async ({ request }) => {
    const id = '999999';

    const getRes = await request.get(`/api/clients/${id}`);
    expect(getRes.status()).toBe(404);
    checkSchema(errorSchema, await getRes.json());

    const deleteRes = await request.delete(`/api/clients/${id}`);
    expect(deleteRes.status()).toBe(404);
    checkSchema(errorSchema, await deleteRes.json());
  });

  it('returns 400 when client data is incomplete', async ({ request }) => {
    const res = await request.post('/api/clients', {
      data: {
        phone: client.phone
      }
    });

    expect(res.status()).toBe(400);
    checkSchema(errorSchema, await res.json());
  });
});
