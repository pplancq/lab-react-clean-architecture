import { mockInventory } from '@Mocks/fixtures/inventory';
import { delay, http, HttpResponse, JsonBodyType } from 'msw';

export const getInventoryCollection = http.get<never, never, JsonBodyType>('api/inventory', async () => {
  await delay();

  return HttpResponse.json(mockInventory);
});
