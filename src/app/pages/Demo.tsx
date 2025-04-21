import { getRootRoute } from '@Front/app/routing/rootRoute';
import { createRoute } from '@tanstack/react-router';

const DemoPage = () => {
  return <div>Demo Page</div>;
};

const demoRoute = createRoute({
  getParentRoute: getRootRoute,
  path: 'demo',
  component: DemoPage,
});

export const getDemoRoute = () => demoRoute;
