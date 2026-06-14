import type { JSONSchemaType } from 'ajv';

type IdRes = {
  id: string;
};

type ClientRes = {
  id: string;
  phone: string;
  lastName: string;
  firstName: string;
};

type ErrorRes = {
  message: string;
};

export const idSchema: JSONSchemaType<IdRes> = {
  type: 'object',
  required: ['id'],
  properties: {
    id: { type: 'string' }
  },
  additionalProperties: false
};

export const clientSchema: JSONSchemaType<ClientRes> = {
  type: 'object',
  required: ['id', 'phone', 'lastName', 'firstName'],
  properties: {
    id: { type: 'string' },
    phone: { type: 'string' },
    lastName: { type: 'string' },
    firstName: { type: 'string' }
  },
  additionalProperties: false
};

export const errorSchema: JSONSchemaType<ErrorRes> = {
  type: 'object',
  required: ['message'],
  properties: {
    message: { type: 'string' }
  },
  additionalProperties: false
};
