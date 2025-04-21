import { createRouter } from '@Front/app/routing/routerFactory';
import { RouterProvider } from '@tanstack/react-router';
import { StrictMode } from 'react';

export const App = () => {
  const router = createRouter();

  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
};
