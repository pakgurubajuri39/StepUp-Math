import { StudentProfile, KumonLevelId, WorksheetAttempt, Worksheet } from '../types';

const STORAGE_KEYS = {
  PROFILE: 'stepup_math_student_profile',
  ALL_PROFILES: 'stepup_math_saved_profiles_map',
  THEME: 'stepup_math_theme',
  ADMIN_SESSION: 'stepup_math_admin_active',
  OFFLINE_WORKSHEETS_CACHE: 'stepup_math_offline_worksheets_v1',
  SERVICE_WORKER_REGISTERED: 'stepup_math_sw_registered',
};

export const DEFAULT_PROFILE: StudentProfile = {
  name: 'Siswa StepUp',
  role: 'student',
  assignedLevel: '6A',
  unlockedLevels: ['6A'],
  lastSelectedLevel: '6A',
  pretestTaken: false,
  isTrial: false,
  trialWorksheetCompleted: false,
  attempts: [],
  streakDays: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
  createdAt: new Date().toISOString(),
};

/**
 * Loads the active student profile from device storage.
 */
export function loadStudentProfile(): StudentProfile | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROFILE);
    if (!raw) return null;
    const parsed: StudentProfile = JSON.parse(raw);
    
    // Ensure unlockedLevels contains at least assignedLevel
    if (!parsed.unlockedLevels || parsed.unlockedLevels.length === 0) {
      parsed.unlockedLevels = [parsed.assignedLevel || '6A'];
    }
    return parsed;
  } catch (e) {
    console.error('Failed to load profile from device storage', e);
    return null;
  }
}

/**
 * Saves student profile to device storage and indexes it by student name
 * so multiple students on the same device retain their respective levels & progress.
 */
export function saveStudentProfile(profile: StudentProfile): void {
  try {
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));

    // Also persist in the all-profiles directory on this device
    if (profile.name && profile.name.trim() && profile.role !== 'trial') {
      const allProfilesRaw = localStorage.getItem(STORAGE_KEYS.ALL_PROFILES);
      const allProfilesMap: Record<string, StudentProfile> = allProfilesRaw ? JSON.parse(allProfilesRaw) : {};
      const key = profile.name.trim().toLowerCase();
      allProfilesMap[key] = profile;
      localStorage.setItem(STORAGE_KEYS.ALL_PROFILES, JSON.stringify(allProfilesMap));
    }
  } catch (e) {
    console.error('Failed to save profile to device storage', e);
  }
}

/**
 * Retrieves a previously saved student profile by name from this device.
 */
export function findStudentProfileByName(name: string): StudentProfile | null {
  try {
    const allProfilesRaw = localStorage.getItem(STORAGE_KEYS.ALL_PROFILES);
    if (!allProfilesRaw) return null;
    const allProfilesMap: Record<string, StudentProfile> = JSON.parse(allProfilesRaw);
    const key = name.trim().toLowerCase();
    return allProfilesMap[key] || null;
  } catch {
    return null;
  }
}

/**
 * Clears the active session from device storage.
 */
export function clearStudentProfile(): void {
  try {
    localStorage.removeItem(STORAGE_KEYS.PROFILE);
  } catch (e) {
    console.error('Failed to clear profile', e);
  }
}

/**
 * Records a completed worksheet attempt, saves score & progress,
 * and automatically unlocks subsequent Kumon levels on the device.
 */
export function recordWorksheetAttempt(
  profile: StudentProfile,
  attempt: WorksheetAttempt
): StudentProfile {
  const updatedAttempts = [...profile.attempts, attempt];

  // Level Progression: Unlock next Kumon level if student passed with >= target score
  let updatedUnlocked = [...profile.unlockedLevels];
  const levelOrder: KumonLevelId[] = [
    '6A', '5A', '4A', '3A', '2A', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'
  ];

  let nextAssignedLevel = profile.assignedLevel;

  if (attempt.passed && !profile.isTrial) {
    const currentIndex = levelOrder.indexOf(attempt.levelId);
    if (currentIndex >= 0 && currentIndex < levelOrder.length - 1) {
      const nextLevel = levelOrder[currentIndex + 1];
      if (!updatedUnlocked.includes(nextLevel)) {
        updatedUnlocked.push(nextLevel);
      }
      // If current completed level is the assigned level, advance assigned level
      if (attempt.levelId === profile.assignedLevel) {
        nextAssignedLevel = nextLevel;
      }
    }
  }

  // Calculate daily streak
  const today = new Date().toISOString().split('T')[0];
  let streak = profile.streakDays || 1;
  if (profile.lastActiveDate !== today) {
    const lastDate = new Date(profile.lastActiveDate);
    const currentDate = new Date(today);
    const diffDays = Math.round((currentDate.getTime() - lastDate.getTime()) / (1000 * 3600 * 24));
    if (diffDays === 1) {
      streak += 1;
    } else if (diffDays > 1) {
      streak = 1;
    }
  }

  const updatedProfile: StudentProfile = {
    ...profile,
    assignedLevel: nextAssignedLevel,
    lastSelectedLevel: attempt.levelId,
    attempts: updatedAttempts,
    unlockedLevels: updatedUnlocked,
    streakDays: streak,
    lastActiveDate: today,
    trialWorksheetCompleted: profile.isTrial ? true : profile.trialWorksheetCompleted,
  };

  saveStudentProfile(updatedProfile);
  return updatedProfile;
}

/**
 * Load Theme preference (light / dark)
 */
export function loadTheme(): 'light' | 'dark' {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.THEME);
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

/**
 * Save Theme preference (light / dark)
 */
export function saveTheme(theme: 'light' | 'dark'): void {
  try {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  } catch (e) {
    console.error('Failed to save theme', e);
  }
}

// ============================================================================
// OFFLINE CACHE-FIRST STRATEGY & SERVICE WORKER UTILITIES
// Enables worksheets & diagnostic pretest to be 100% accessible offline.
// ============================================================================

/**
 * Registers the Service Worker to provide offline cache-first access
 * for all worksheets, pretest questions, and app assets.
 */
export function registerServiceWorker(): Promise<boolean> {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    console.info('[Storage] Service Worker is not supported in this browser environment.');
    return Promise.resolve(false);
  }

  return navigator.serviceWorker
    .register('/sw.js')
    .then((registration) => {
      console.log('[Storage] Service Worker registered with scope:', registration.scope);
      try {
        localStorage.setItem(STORAGE_KEYS.SERVICE_WORKER_REGISTERED, 'true');
      } catch {
        // Storage access safe
      }
      return true;
    })
    .catch((error) => {
      console.warn('[Storage] Service Worker registration failed (normal in sandboxed/iframe preview):', error);
      return false;
    });
}

/**
 * Cache-First Local Storage helper for worksheets:
 * Caches worksheet JSON data in localStorage as a resilient offline fallback layer.
 */
export function cacheWorksheetOffline(worksheet: Worksheet): void {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.OFFLINE_WORKSHEETS_CACHE);
    const cache: Record<string, Worksheet> = raw ? JSON.parse(raw) : {};
    cache[worksheet.id] = worksheet;
    localStorage.setItem(STORAGE_KEYS.OFFLINE_WORKSHEETS_CACHE, JSON.stringify(cache));
  } catch (e) {
    console.warn('[Storage] Offline worksheet cache write warning:', e);
  }
}

/**
 * Retrieve cached worksheet when offline or fast loading
 */
export function getCachedWorksheetOffline(worksheetId: string): Worksheet | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.OFFLINE_WORKSHEETS_CACHE);
    if (!raw) return null;
    const cache: Record<string, Worksheet> = JSON.parse(raw);
    return cache[worksheetId] || null;
  } catch {
    return null;
  }
}

/**
 * Returns offline readiness status
 */
export function getOfflineStatus(): { isOnline: boolean; isCached: boolean } {
  const isOnline = typeof navigator !== 'undefined' ? navigator.onLine : true;
  let isCached = false;
  try {
    isCached = localStorage.getItem(STORAGE_KEYS.SERVICE_WORKER_REGISTERED) === 'true';
  } catch {
    isCached = false;
  }
  return { isOnline, isCached };
}
