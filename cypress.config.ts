import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: process.env.VITE_APP_CLIENT_BASE_URL,
    specPattern: [
      'cypress/e2e/**/*.e2e-spec.[tj]s?(x)',
      'cypress/e2e/**/*.e2e-test.[tj]s?(x)',
    ],
    retries: {
      runMode: 3,
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: false,
    screenshotOnRunFailure: false,
  },
});
