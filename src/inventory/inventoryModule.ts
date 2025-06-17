import { InventoryService } from '@Front/inventory/application/inventoryService';
import { GetInventoryCollection } from '@Front/inventory/application/useCase/GetInventoryCollection';
import { InventoryRepository } from '@Front/inventory/infrastructure/fetchApi/inventoryRepository';
import { ContainerModule } from 'inversify';

export const inventoryModule: ContainerModule = new ContainerModule(options => {
  options.bind(InventoryRepository).to(InventoryRepository).inSingletonScope();
  options
    .bind(GetInventoryCollection)
    .toDynamicValue(services => GetInventoryCollection.init(services.get(InventoryRepository)))
    .inSingletonScope();
  options
    .bind(InventoryService)
    .toDynamicValue(services => InventoryService.init(services.get(GetInventoryCollection)))
    .inSingletonScope();
});
