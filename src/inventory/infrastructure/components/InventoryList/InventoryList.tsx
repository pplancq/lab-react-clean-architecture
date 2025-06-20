import { InventoryService } from '@Front/inventory/application/inventoryService';
import { useService } from '@Front/shared/hooks/useService/useService';
import { useQuery } from '@tanstack/react-query';

import defaultClasses from './InventoryList.module.css';

export const InventoryList = () => {
  const inventoryService = useService(InventoryService);

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
