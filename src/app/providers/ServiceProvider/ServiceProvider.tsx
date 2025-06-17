import { ServiceContext } from '@Front/app/providers/ServiceProvider/ServiceContext';
import type { Container } from 'inversify';
import { type PropsWithChildren, useRef } from 'react';

type ContainerProviderProps = {
  container: Container;
};

export const ServiceProvider = ({ container, children }: PropsWithChildren<ContainerProviderProps>) => {
  const containerRef = useRef(container);

  return <ServiceContext value={containerRef}>{children}</ServiceContext>;
};
