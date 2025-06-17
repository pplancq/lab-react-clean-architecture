import type { Container } from 'inversify';
import { createContext } from 'react';

type ServiceContextProps = {
  current: Container;
};

const initialServiceContext: ServiceContextProps = {
  current: {} as Container,
};

export const ServiceContext = createContext<ServiceContextProps>(initialServiceContext);
