import { getInventoryCollection } from '@Mocks/handlers/inventory';
import { setupWorker } from 'msw/browser';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const worker = setupWorker(getInventoryCollection);
