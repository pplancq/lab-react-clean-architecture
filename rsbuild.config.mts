import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import packageJson from './package.json';

const { publicVars } = loadEnv({ prefixes: ['FRONT_'] });

const publicUrl = process.env.PUBLIC_URL ?? packageJson.homepage ?? '/';
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
});
