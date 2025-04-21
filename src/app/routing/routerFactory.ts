import { routeTree } from '@Front/app/routing/routeTree';
import { createRouter as createTanstackRouter } from '@tanstack/react-router';

export const createRouter = () => {
  return createTanstackRouter({ routeTree });
};
