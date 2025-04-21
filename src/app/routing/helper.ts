import {
  index as virtualIndex,
  layout as virtualLayout,
  rootRoute as virtualRootRoute,
  route as virtualRoute,
} from '@tanstack/virtual-file-routes';
import type {
  IndexRoute,
  LayoutRoute,
  Route,
  VirtualRootRoute,
  VirtualRouteNode,
} from '@tanstack/virtual-file-routes/src/types';

export const rootRoute = (children: Array<VirtualRouteNode>): VirtualRootRoute =>
  virtualRootRoute('routing/root.tsx', children);

export const index = (path: string): IndexRoute => virtualIndex(`pages/${path}`);

export function layout(file: string, children: Array<VirtualRouteNode>): LayoutRoute;
export function layout(id: string, file: string, children: Array<VirtualRouteNode>): LayoutRoute;
export function layout(
  idOrFile: string,
  fileOrChildren: string | Array<VirtualRouteNode>,
  children: Array<VirtualRouteNode> = [],
): LayoutRoute {
  if (Array.isArray(fileOrChildren)) {
    return virtualLayout(`layout/${idOrFile}`, fileOrChildren);
  }
  return virtualLayout(idOrFile, `layout/${fileOrChildren}`, children);
}

export function route(path: string, children: Array<VirtualRouteNode>): Route;
export function route(path: string, file: string): Route;
export function route(path: string, file: string, children: Array<VirtualRouteNode>): Route;
export function route(
  path: string,
  fileOrChildren: string | Array<VirtualRouteNode>,
  children: Array<VirtualRouteNode> = [],
): Route {
  if (typeof fileOrChildren === 'string') {
    return virtualRoute(path, `pages/${fileOrChildren}`, children);
  }
  return virtualRoute(path, fileOrChildren);
}
