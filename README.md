# Post API Tests

This project contains a small TypeScript API and Playwright API tests for the client flow.

## Stack

- TypeScript
- Express
- Playwright

## API

```text
POST /api/clients
GET /api/clients/:id
DELETE /api/clients/:id
```

Clients are stored in memory while the API is running.

## Setup

```bash
npm install
```

## Test Data

Create `.env` from `.env.example` if you want to keep default local values:

```env
BASE_URL=http://localhost:3000
PORT=3000
CLIENT_PHONE=380671111111
CLIENT_LAST_NAME=Test
CLIENT_FIRST_NAME=Test
```

You can also pass client data from CLI:

```bash
CLIENT_PHONE=380671111111 CLIENT_LAST_NAME=Test CLIENT_FIRST_NAME=Test npm test
```

CLI values override values from `.env`.

## Run

```bash
npm test
```

Playwright starts the local API before tests and stops it after the run.

## Report

```bash
npm run test:report
```

## Checks

```bash
npm run typecheck
```
