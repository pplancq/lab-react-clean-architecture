import type { Inventory } from '@Front/inventory/domain/model/inventory';
import type { InventoryRepositoryInterface } from '@Front/inventory/domain/repository/InventoryRepositoryInterface';
import { fetchApi } from '@Front/shared/infrastructure/fetchApi';

export class InventoryRepository implements InventoryRepositoryInterface {
  public getInventoryCollection(): Promise<Inventory[]> {
    return fetchApi<Array<Inventory & Json>>({
      path: '/api/inventory',
    });
  }
}
