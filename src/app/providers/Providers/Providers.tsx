import { QueryProvider } from '@Front/app/providers/QueryProvider/QueryProvider';
import type { ComponentProps, PropsWithChildren } from 'react';

type ProvidersProps = {
  queryClient: ComponentProps<typeof QueryProvider>['queryClient'];
};

export const Providers = ({ queryClient, children }: PropsWithChildren<ProvidersProps>) => {
  return <QueryProvider queryClient={queryClient}>{children}</QueryProvider>;
};
