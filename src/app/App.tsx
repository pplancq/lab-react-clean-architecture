import { createRouter } from '@Front/app/routing/router';
import { RouterProvider } from '@tanstack/react-router';
import { StrictMode } from 'react';

type AppProps = {
  basename?: string;
};

export const App = ({ basename }: AppProps) => {
  const router = createRouter({ basename });

  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
};
