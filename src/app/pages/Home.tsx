import { InventoryList } from '@Front/inventory/infrastructure/components/InventoryList/InventoryList';
import { createFileRoute } from '@tanstack/react-router';

const HomePage = () => {
  return (
    <div>
      Home Page
      <InventoryList />
    </div>
  );
};

export const Route = createFileRoute('/_Layout/')({
  component: HomePage,
});
