/**
 * Capitalizes the first letter of a string.
 * @param str - The string to capitalize.
 * @returns The capitalized string.
 */
export const capitalize = (str: string): string => {
  // If the input string is falsy (e.g., empty, null or undefined), return and empty string.
  if (!str) return '';

  // Capitalize the first character and make the rest lowercase, then return the resulting string.
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};