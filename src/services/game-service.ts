import { ApiResponse } from '@/utils/endpoint';

export async function fetchGames(
  genre: string | null,
  page: number = 1
): Promise<ApiResponse> {
  const url = new URL('/api/games', window.location.origin);

  if (genre) url.searchParams.set('genre', genre);

  url.searchParams.set('page', page.toString());

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`Failed to fetch games: ${response.statusText}`);
  }

  return response.json();
}
