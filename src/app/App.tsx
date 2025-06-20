import { container } from '@Front/app/config/container';
import { queryClient } from '@Front/app/config/queryClient';
import { Providers } from '@Front/app/providers/Providers/Providers';
import { createRouter } from '@Front/app/routing/router';
import { RouterProvider } from '@tanstack/react-router';

import '../shared/assets/css';

type AppProps = {
  basename?: string;
};

export const App = ({ basename }: AppProps) => {
  const router = createRouter({ basename });

  return (
    <Providers queryClient={queryClient} container={container}>
      <RouterProvider router={router} />
    </Providers>
  );
};
