import { useQuery } from '@tanstack/react-query';
import { ENV } from '@/lib/env';
import type { GetRoomsResponse } from './types/get-rooms-response';

export function useRooms() {
  return useQuery<GetRoomsResponse>({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch(`${ENV.API_URL}/rooms`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result: GetRoomsResponse = await response.json();

      return result;
    },
  });
}
