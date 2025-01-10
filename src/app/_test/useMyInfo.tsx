import { useQuery } from '@tanstack/react-query';

export function useMyInfo() {
  const { data, isLoading } = useQuery({ queryKey:['test'],
    staleTime: 1000 * 60,
  });

  return { data, isLoading }
}
