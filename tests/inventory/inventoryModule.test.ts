import { describe, it, expect } from 'vitest';
import { Container } from 'inversify';
import { inventoryModule } from '@Front/inventory/inventoryModule';
import { InventoryRepository } from '@Front/inventory/infrastructure/fetchApi/inventoryRepository';
import { GetInventoryCollection } from '@Front/inventory/application/useCase/GetInventoryCollection';
import { InventoryService } from '@Front/inventory/application/inventoryService';

describe('inventoryModule', () => {
  it('enregistre les dépendances dans le container', () => {
    const container = new Container();
    container.loadSync(inventoryModule);

    expect(container.get(InventoryRepository)).toBeInstanceOf(InventoryRepository);
    expect(container.get(GetInventoryCollection)).toBeInstanceOf(GetInventoryCollection);
    expect(container.get(InventoryService)).toBeInstanceOf(InventoryService);
  });
});
