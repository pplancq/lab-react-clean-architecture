import { describe, it, expect } from 'vitest';
import { InventoryService } from '@Front/inventory/application/inventoryService';
import { GetInventoryCollection } from '@Front/inventory/application/useCase/GetInventoryCollection';
import { Inventory } from '@Front/inventory/domain/model/inventory';
import { InventoryRepositoryInMemory } from '../infrastructure/repository/InventoryRepositoryInMemory';

describe('InventoryService', () => {
  it('should fetch inventory collection using the use case', async () => {
    const initialData = [
      new Inventory('1', 'Star Trek', 'J.J. Abrams', 2009),
      new Inventory('2', 'Casino Royale', 'Martin Campbell', 2006),
    ];
    const repository = InventoryRepositoryInMemory.init(initialData);
    const useCase = GetInventoryCollection.init(repository);
    const service = InventoryService.init(useCase);

    const result = await service.fetchInventoryCollection();

    expect(result).toStrictEqual(initialData);
  });
});
