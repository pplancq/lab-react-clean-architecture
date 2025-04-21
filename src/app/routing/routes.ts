import { index, layout, rootRoute, route } from './helper';

export const routes = rootRoute([layout('Layout.tsx', [index('Home.tsx'), route('/demo', 'Demo.tsx')])]);
