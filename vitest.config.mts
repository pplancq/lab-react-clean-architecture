import react from '@vitejs/plugin-react-swc';
import { loadEnv } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), viteTsconfigPaths()],
    envPrefix: 'FRONT_',
    test: {
      globals: false,
      environment: 'jsdom',
      setupFiles: 'vitest.setup.ts',
      clearMocks: true,
      css: false,
      reporters: ['default', 'junit'],
      outputFile: {
        junit: 'junit-report.xml',
      },
      include: ['src/**/*.(spec|test|steps).[jt]s?(x)'],
      poolOptions: {
        forks: {
          minForks: env.CI ? 1 : undefined,
          maxForks: env.CI ? 2 : undefined,
        },
      },
      coverage: {
        enabled: env.CI,
        reporter: ['lcov', 'json', 'html', 'text', 'cobertura'],
        provider: 'v8',
        lines: 80,
        functions: 75,
        branches: 80,
        statements: 80,
        include: ['src/**/*.[jt]s?(x)'],
        exclude: [
          'src/**/*.d.[jt]s?(x)',
          'src/utils/tests/**/*.[jt]s?(x)',
          'src/**/*.types.[jt]s?(x)',
          'src/**/index.[jt]s?(x)',
          'src/**/*.stories.[jt]s?(x)',
        ],
      },
    },
  };
});
