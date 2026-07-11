import type { PlatformStatsData, PlatformStatsResponse } from '../types/platform-stats';

export async function fetchPlatformStats(): Promise<PlatformStatsData | null> {
  try {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    if (!baseUrl) {
      console.warn('VITE_API_BASE_URL is not defined in environment variables.');
      return null;
    }

    const response = await fetch(`${baseUrl}/public/platform-stats`);
    
    if (!response.ok) {
      return null;
    }

    const json = (await response.json()) as PlatformStatsResponse;
    if (json && json.success && json.data) {
      return json.data;
    }

    return null;
  } catch {
    // Silently fail on network error to allow UI fallback
    return null;
  }
}
