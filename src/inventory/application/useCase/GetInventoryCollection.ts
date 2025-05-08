import type { Inventory } from '@Front/inventory/domain/model/inventory';
import type { InventoryRepositoryInterface } from '@Front/inventory/domain/repository/InventoryRepositoryInterface';

export class GetInventoryCollection {
  constructor(private readonly inventoryRepository: InventoryRepositoryInterface) {}

  public static init(inventoryRepository: InventoryRepositoryInterface): GetInventoryCollection {
    return new GetInventoryCollection(inventoryRepository);
  }

  public async execute(): Promise<Inventory[]> {
    return this.inventoryRepository.getInventoryCollection();
  }
}
