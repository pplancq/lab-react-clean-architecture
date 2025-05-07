import type { Inventory } from '@Front/inventory/domain/model/inventory';

export interface InventoryRepositoryInterface {
  getInventoryCollection(): Promise<Inventory[]>;
}
