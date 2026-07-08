const getEnvUrl = (value: string | undefined, fallback: string) => value?.trim() || fallback;

export const MAIN_URL = getEnvUrl(import.meta.env.VITE_MAIN_URL, 'https://dalilsubhi.com');
export const SERVICES_URL = getEnvUrl(
  import.meta.env.VITE_SERVICES_URL,
  'https://services-ds-core-91.dalilsubhi.com',
);
export const COMMUNITY_HUB_URL = getEnvUrl(
  import.meta.env.VITE_COMMUNITY_URL,
  'https://services-ds-core-91.dalilsubhi.com/community',
);
export const RENTALS_URL = getEnvUrl(import.meta.env.VITE_RENTALS_URL, 'https://rentals-ds-core-91.dalilsubhi.com');
export const REAL_ESTATE_URL = getEnvUrl(
  import.meta.env.VITE_REAL_ESTATE_URL,
  'https://realestate-ds-core-91.dalilsubhi.com',
);
export const RESIDENT_APP_URL = getEnvUrl(import.meta.env.VITE_RESIDENT_APP_URL, 'https://app-ds-core-91.dalilsubhi.com');
export const ADMIN_URL = getEnvUrl(import.meta.env.VITE_ADMIN_URL, 'https://ds-ops-7x.dalilsubhi.com');
export const OWNERS_URL = getEnvUrl(import.meta.env.VITE_OWNERS_URL, `${RENTALS_URL}/owners/list-your-unit`);
export const WHATSAPP_GROUP_URL = getEnvUrl(
  import.meta.env.VITE_WHATSAPP_GROUP_URL,
  'https://chat.whatsapp.com/ECEZfbsvjlU43eDvKa9XUu',
);
export const FACEBOOK_GROUP_URL = getEnvUrl(
  import.meta.env.VITE_FACEBOOK_GROUP_URL,
  'https://www.facebook.com/share/g/1CzbCwjugk/?mibextid=KtfwRi',
);
