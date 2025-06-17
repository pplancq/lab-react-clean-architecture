import { inventoryModule } from '@Front/inventory/inventoryModule';
import { Container } from 'inversify';

export const container = new Container();

container.loadSync(inventoryModule);
