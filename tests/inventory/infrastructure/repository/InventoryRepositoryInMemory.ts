import type { InventoryRepositoryInterface } from '@Front/inventory/domain/repository/InventoryRepositoryInterface';
import type { Inventory } from '@Front/inventory/domain/model/inventory';

export class InventoryRepositoryInMemory implements InventoryRepositoryInterface {
  constructor(private readonly inventories: Inventory[] = []) {}

  public static init(inventories: Inventory[] = []): InventoryRepositoryInMemory {
    return new InventoryRepositoryInMemory(inventories);
  }

  public async getInventoryCollection(): Promise<Inventory[]> {
    return this.inventories;
  }
}
