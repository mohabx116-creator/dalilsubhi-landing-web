export type RatingPromptAction = 'rated' | 'later' | 'dismissed';

export interface RatingPromptState {
  action: RatingPromptAction;
  timestamp: number;
  rating?: number;
}

const STATE_KEY = 'dalilsubhi_rating_prompt_state';
const PAGE_VIEWS_KEY = 'dalilsubhi_rating_prompt_page_views';
const SESSION_SEEN_KEY = 'dalilsubhi_rating_prompt_session_seen';

const DAY_MS = 24 * 60 * 60 * 1000;
const SUPPRESSION_DAYS = {
  rated: 60,
  later: 7,
  dismissed: 7,
} as const;

let sessionSeenInMemory = false;

function safeLocalStorage() {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function safeSessionStorage() {
  try {
    return window.sessionStorage;
  } catch {
    return null;
  }
}

function readJson<T>(storage: Storage | null, key: string): T | null {
  if (!storage) {
    return null;
  }

  try {
    const raw = storage.getItem(key);
    if (!raw) {
      return null;
    }

    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

function writeJson(storage: Storage | null, key: string, value: unknown) {
  if (!storage) {
    return;
  }

  try {
    storage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore storage failures in private mode or locked-down browsers.
  }
}

export function getRatingPromptState(): RatingPromptState | null {
  return readJson<RatingPromptState>(safeLocalStorage(), STATE_KEY);
}

export function setRatingPromptState(state: RatingPromptState) {
  writeJson(safeLocalStorage(), STATE_KEY, state);
}

export function incrementRatingPromptPageViews() {
  const storage = safeLocalStorage();
  if (!storage) {
    return 0;
  }

  try {
    const current = Number(storage.getItem(PAGE_VIEWS_KEY) ?? '0');
    const next = Number.isFinite(current) ? current + 1 : 1;
    storage.setItem(PAGE_VIEWS_KEY, String(next));
    return next;
  } catch {
    return 0;
  }
}

export function hasRatingPromptSessionSeen() {
  const storage = safeSessionStorage();
  if (!storage) {
    return sessionSeenInMemory;
  }

  try {
    return storage.getItem(SESSION_SEEN_KEY) === '1' || sessionSeenInMemory;
  } catch {
    return sessionSeenInMemory;
  }
}

export function markRatingPromptSessionSeen() {
  const storage = safeSessionStorage();
  if (!storage) {
    return;
  }

  try {
    storage.setItem(SESSION_SEEN_KEY, '1');
    sessionSeenInMemory = true;
  } catch {
    sessionSeenInMemory = true;
  }
}

export function shouldSuppressRatingPrompt(now = Date.now()) {
  const state = getRatingPromptState();
  if (!state) {
    return false;
  }

  const age = now - state.timestamp;
  const allowedDays = SUPPRESSION_DAYS[state.action];
  return age >= 0 && age < allowedDays * DAY_MS;
}
