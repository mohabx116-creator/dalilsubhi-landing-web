export interface PlatformStatsData {
  servicesCount: number;
  realEstateListingsCount: number;
  rentalListingsCount: number;
  communityEntriesCount: number;
  categoriesCount: number;
  updatedAt: string;
  isFallback: boolean;
  unavailableCounts: string[];
}

export interface PlatformStatsResponse {
  success: boolean;
  message: string;
  data: PlatformStatsData;
}
