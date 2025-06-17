import { QueryProvider } from '@Front/app/providers/QueryProvider/QueryProvider';
import { ServiceProvider } from '@Front/app/providers/ServiceProvider/ServiceProvider';
import type { ComponentProps, PropsWithChildren } from 'react';

type ProvidersProps = {
  queryClient: ComponentProps<typeof QueryProvider>['queryClient'];
  container: ComponentProps<typeof ServiceProvider>['container'];
};

export const Providers = ({ queryClient, container, children }: PropsWithChildren<ProvidersProps>) => {
  return (
    <ServiceProvider container={container}>
      <QueryProvider queryClient={queryClient}>{children}</QueryProvider>
    </ServiceProvider>
  );
};
