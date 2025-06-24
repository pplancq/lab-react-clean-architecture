import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { TanStackRouterGeneratorRspack } from '@tanstack/router-plugin/rspack';
import packageJson from './package.json';
import { routesConfig } from './routes.config';

const { publicVars } = loadEnv({ prefixes: ['FRONT_'] });

const publicUrl = process.env.PUBLIC_URL ?? (packageJson as { homepage?: string }).homepage ?? '/';
const publicPath = new URL(publicUrl.endsWith('/') ? publicUrl : `${publicUrl}/`, 'http://localhost').pathname;

export default defineConfig({
  plugins: [pluginReact(), pluginSass()],
  source: {
    entry: {
      index: 'src/main.ts',
    },
    define: publicVars,
  },
  output: {
    assetPrefix: publicPath,
    distPath: {
      root: 'build',
    },
    copy: [
      {
        from: 'public',
        to: '.',
      },
    ],
  },
  server: {
    port: 3000,
    open: false,
  },
  html: {
    template: './index.html',
  },
  tools: {
    rspack: {
      plugins: [
        TanStackRouterGeneratorRspack({
          target: 'react',
          autoCodeSplitting: true,
          routesDirectory: './src',
          generatedRouteTree: './src/app/routing/routeTree.gen.ts',
          virtualRouteConfig: routesConfig,
        }),
      ],
    },
  },
});
