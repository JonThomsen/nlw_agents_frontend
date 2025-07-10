import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { ENV } from '@/lib/env';

type GetRoomsAPIResponse = {
  id: string;
  name: string;
}[];

export function CreateRoom() {
  const { data, isLoading } = useQuery<GetRoomsAPIResponse>({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch(`${ENV.API_URL}/rooms`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result: GetRoomsAPIResponse = await response.json();

      return result;
    },
  });

  return (
    <div>
      <div>Create Room</div>

      {isLoading && <p>Loading rooms...</p>}
      {data && data.length > 0 ? (
        <div className="mt-4 flex flex-col gap-2">
          {data.map((room) => (
            <Link key={room.id} to={`/room/${room.id}`}>
              {room.name}
            </Link>
          ))}
        </div>
      ) : (
        <p>No rooms available</p>
      )}
    </div>
  );
}
