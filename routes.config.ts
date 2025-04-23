import { index, layout, rootRoute, route } from '@tanstack/virtual-file-routes';

export const routesConfig = rootRoute('app/routing/Root.tsx', [
  layout('app/layout/Layout.tsx', [index('app/pages/Home.tsx'), route('/demo', 'app/pages/Demo.tsx')]),
]);
