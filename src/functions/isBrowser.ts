/**
 * Checks if the code is running in a browser environment.
 * @returns True if the code is running in a browser environment, otherwise false.
 */
export const isBrowser = (): boolean => typeof window !== 'undefined' && typeof document !== 'undefined';