'use client';

import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactNode, useState } from 'react';

type RQProviderProps = {
  children: ReactNode;
  dehydratedState: unknown;
};

export default function RQProvider({ children, dehydratedState }: RQProviderProps) {
  const [client] = useState(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retryOnMount: true,
          refetchOnReconnect: false,
          retry: false,
        },
      },
    });
  });

  return (
    <QueryClientProvider client={client}>
      <HydrationBoundary state={dehydratedState}>
        {children}
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
