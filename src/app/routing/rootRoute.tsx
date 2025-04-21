import { Layout } from '@Front/app/Layout';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

const Root = () => {
  return (
    <Layout>
      <Outlet />
      <TanStackRouterDevtools />
    </Layout>
  );
};

const rootRoute = createRootRoute({
  component: Root,
});

export const getRootRoute = () => rootRoute;
