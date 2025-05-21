import { InventoryService } from '@Front/inventory/application/inventoryService';
import { GetInventoryCollection } from '@Front/inventory/application/useCase/GetInventoryCollection';
import { InventoryRepository } from '@Front/inventory/infrastructure/fetchApi/inventoryRepository';
import { useQuery } from '@tanstack/react-query';

import defaultClasses from './InventoryList.module.css';

const inventoryRepository = new InventoryRepository();
const getInventoryCollection = GetInventoryCollection.init(inventoryRepository);
const inventoryService = InventoryService.init(getInventoryCollection);

export const InventoryList = () => {
  const { data } = useQuery({
    queryKey: ['inventory', 'collection'],
    queryFn: async () => inventoryService.fetchInventoryCollection(),
  });

  return (
    <table className={defaultClasses.root}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Year</th>
          <th>Creator</th>
        </tr>
      </thead>
      <tbody>
        {data?.map(item => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.year}</td>
            <td>{item.creator}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
