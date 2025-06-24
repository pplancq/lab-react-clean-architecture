import { Providers } from '@Front/app/providers/Providers/Providers';
import { inventoryModule } from '@Front/inventory/inventoryModule';
import { getInventoryCollection } from '@Mocks/handlers/inventory';
import { server } from '@Mocks/server';
import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { InventoryList } from '@Front/inventory/infrastructure/components/InventoryList/InventoryList';
import { Container } from 'inversify';
import { QueryClient } from '@tanstack/react-query';

describe('InventoryList', () => {
  const container = new Container();
  container.loadSync(inventoryModule);

  it("affiche les items de l'inventaire", async () => {
    server.use(getInventoryCollection);

    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
          refetchOnWindowFocus: false,
        },
      },
    });

    render(
      <Providers queryClient={queryClient} container={container}>
        <InventoryList />
      </Providers>,
    );

    await waitFor(() => {
      expect(screen.getByText('Star Wars')).toBeInTheDocument();
    });

    expect(screen.getByText('Inception')).toBeInTheDocument();
  });
});
