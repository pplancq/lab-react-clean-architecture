import { getDemoRoute } from '@Front/app/pages/Demo';
import { getHomeRoute } from '@Front/app/pages/Home';
import { getRootRoute } from '@Front/app/routing/rootRoute';

const rootRoute = getRootRoute();

export const routeTree = rootRoute.addChildren([getHomeRoute(), getDemoRoute()]);
