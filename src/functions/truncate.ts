/**
 * Truncates a string to a specified length, adding ellipses if necessary.
 * @param str - The string to truncate.
 * @param length - The maximum length of the truncated string.
 * @returns The truncated string with ellipses if it was shortened.
 */
export const truncate = (str: string, length: number): string => {
  return str.length >length ? str.slice(0, length) + '...' : str;
};