import { defineConfig } from '@playwright/test';
import 'dotenv/config';

const port = process.env.PORT || '3000';

export default defineConfig({
  testDir: './tests',
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: process.env.BASE_URL || `http://localhost:${port}`
  },
  webServer: {
    command: 'npm run api',
    url: `http://localhost:${port}/health`,
    reuseExistingServer: !process.env.CI,
    timeout: 10000
  }
});
