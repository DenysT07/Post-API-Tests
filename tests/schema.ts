import { expect } from '@playwright/test';
import Ajv, { type JSONSchemaType } from 'ajv';

const ajv = new Ajv();

export function checkSchema<T>(schema: JSONSchemaType<T>, data: unknown): void {
  const valid = ajv.validate(schema, data);

  expect(valid, JSON.stringify(ajv.errors, null, 2)).toBeTruthy();
}
