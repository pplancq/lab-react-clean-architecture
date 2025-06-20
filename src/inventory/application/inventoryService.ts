import type { GetInventoryCollection } from '@Front/inventory/application/useCase/GetInventoryCollection';
import type { Inventory } from '@Front/inventory/domain/model/inventory';

export class InventoryService {
  constructor(private readonly getInventoryCollection: GetInventoryCollection) {}

  public static init(getInventoryCollection: GetInventoryCollection): InventoryService {
    return new InventoryService(getInventoryCollection);
  }

  public fetchInventoryCollection(): Promise<Inventory[]> {
    return this.getInventoryCollection.execute();
  }
}
