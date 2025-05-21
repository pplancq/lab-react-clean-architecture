import { getInventoryCollection } from '@Mocks/handlers/inventory';
import { setupWorker } from 'msw/browser';

export const worker = setupWorker(getInventoryCollection);
