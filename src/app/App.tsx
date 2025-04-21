import { router } from '@Front/app/routing/router';
import { RouterProvider } from '@tanstack/react-router';
import { StrictMode } from 'react';

export const App = () => {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
};
