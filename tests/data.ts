import 'dotenv/config';

export const client = {
  phone: process.env.CLIENT_PHONE || '380671111111',
  lastName: process.env.CLIENT_LAST_NAME || 'Test',
  firstName: process.env.CLIENT_FIRST_NAME || 'Test'
};
