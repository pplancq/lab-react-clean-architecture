import { routeTree } from '@Front/app/routing/routeTree.gen';
import { createRouter as createTanstackRouter } from '@tanstack/react-router';

export const router = createTanstackRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
