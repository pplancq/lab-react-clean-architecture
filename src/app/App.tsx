import { queryClient } from '@Front/app/config/queryClient';
import { Providers } from '@Front/app/providers/Providers/Providers';
import { createRouter } from '@Front/app/routing/router';
import { RouterProvider } from '@tanstack/react-router';

type AppProps = {
  basename?: string;
};

export const App = ({ basename }: AppProps) => {
  const router = createRouter({ basename });

  return (
    <Providers queryClient={queryClient}>
      <RouterProvider router={router} />
    </Providers>
  );
};
