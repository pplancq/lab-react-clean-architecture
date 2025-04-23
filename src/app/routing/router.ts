import { routeTree } from '@Front/app/routing/routeTree.gen';
import { createRouter as createTanstackRouter } from '@tanstack/react-router';

type CreateRouterProps = {
  basename?: string;
};

const router = createTanstackRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export const createRouter = ({ basename }: CreateRouterProps = {}) => {
  router.update({
    basepath: basename,
  });

  return router;
};
