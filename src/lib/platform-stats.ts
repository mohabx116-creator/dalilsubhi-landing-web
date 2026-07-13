import type { PlatformStatsData, PlatformStatsResponse } from '../types/platform-stats';

const DEFAULT_API_BASE_PATH = '/api/v1';
const PLATFORM_STATS_PATH = '/public/platform-stats';

function resolvePlatformStatsPath(baseUrl: string | undefined) {
  if (!baseUrl) {
    return `${DEFAULT_API_BASE_PATH}${PLATFORM_STATS_PATH}`;
  }

  try {
    const pathname = new URL(baseUrl).pathname.replace(/\/+$/, '');
    return `${pathname || DEFAULT_API_BASE_PATH}${PLATFORM_STATS_PATH}`;
  } catch {
    return `${DEFAULT_API_BASE_PATH}${PLATFORM_STATS_PATH}`;
  }
}

function isPlatformStatsData(value: unknown): value is PlatformStatsData {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const data = value as Partial<PlatformStatsData>;
  return (
    typeof data.servicesCount === 'number' &&
    typeof data.realEstateListingsCount === 'number' &&
    typeof data.rentalListingsCount === 'number' &&
    typeof data.communityEntriesCount === 'number' &&
    typeof data.categoriesCount === 'number' &&
    typeof data.updatedAt === 'string' &&
    typeof data.isFallback === 'boolean' &&
    Array.isArray(data.unavailableCounts) &&
    data.unavailableCounts.every((item) => typeof item === 'string')
  );
}

export async function fetchPlatformStats(): Promise<PlatformStatsData | null> {
  try {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const requestPath = resolvePlatformStatsPath(baseUrl);

    const response = await fetch(requestPath, {
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      return null;
    }

    const json: unknown = (await response.json()) as PlatformStatsResponse;
    if (!json || typeof json !== 'object') {
      return null;
    }

    const payload = json as Partial<PlatformStatsResponse>;
    if (payload.success !== true || !isPlatformStatsData(payload.data)) {
      return null;
    }

    return payload.data;
  } catch {
    return null;
  }
}
