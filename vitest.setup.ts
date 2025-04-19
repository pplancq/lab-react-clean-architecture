/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom/vitest';
import { server } from '@Mocks/server';
import { cleanup } from '@testing-library/react';
import { afterAll, afterEach, beforeAll } from 'vitest';

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });
});

afterAll(() => {
  server.close();
});

afterEach(() => {
  server.resetHandlers();
  cleanup();
});
