const PREFIX = 'menorca_ruleta_girado_';

export function getSpinKey(utmSource: string): string {
  return PREFIX + utmSource;
}

export function hasAlreadySpun(utmSource: string): boolean {
  try {
    return localStorage.getItem(getSpinKey(utmSource)) === '1';
  } catch {
    return false;
  }
}

export function markAsSpun(utmSource: string): void {
  try {
    localStorage.setItem(getSpinKey(utmSource), '1');
  } catch {
    // ignore
  }
}
