import { describe, it, expect } from 'vitest';
import { GetInventoryCollection } from '@Front/inventory/application/useCase/GetInventoryCollection';
import { Inventory } from '@Front/inventory/domain/model/inventory';
import { InventoryRepositoryInMemory } from '../../infrastructure/repository/InventoryRepositoryInMemory';

describe('GetInventoryCollection', () => {
  it('should fetch inventory collection from the repository', async () => {
    const initialData = [
      new Inventory('1', 'Star Wars', 'George Lucas', 1977),
      new Inventory('2', 'Inception', 'Christopher Nolan', 2010),
    ];
    const repository = InventoryRepositoryInMemory.init(initialData);
    const useCase = GetInventoryCollection.init(repository);

    const result = await useCase.execute();

    expect(result).toStrictEqual(initialData);
  });
});
