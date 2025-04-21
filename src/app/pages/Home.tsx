import { getRootRoute } from '@Front/app/routing/rootRoute';
import { createRoute } from '@tanstack/react-router';

const HomePage = () => {
  return <div>Home Page</div>;
};

const homeRoute = createRoute({
  getParentRoute: getRootRoute,
  path: '/',
  component: HomePage,
});

export const getHomeRoute = () => homeRoute;
