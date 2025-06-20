import { ServiceContext } from '@Front/app/providers/ServiceProvider/ServiceContext';
import type { ServiceIdentifier } from 'inversify';
import { useContext } from 'react';

export const useService = <T = unknown>(serviceIdentifier: ServiceIdentifier<T>): T => {
  return useContext(ServiceContext).current.get<T>(serviceIdentifier);
};
