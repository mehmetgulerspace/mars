/**
 * Checks if a value is empty.
 * Empty values are defined as: null, undefined, empty string, empty array, or empty object.
 * @param value - The value to check.
 * @returns Returns true if the value is empty, otherwise returns false.
 */
export const isEmpty = (value: any): boolean => {
  // Check for null or undefined
  if (value === null || value === undefined) {
    return true;
  }

  // Check for an empty string (including strings that only contain whitespace)
  if (typeof value === 'string' && value.trim() === '') {
    return true;
  }

  // Check for an empty array
  if (Array.isArray(value) && value.length === 0) {
    return true;
  }

  // Check for an empty object (excluding null which is also typeof 'object')
  if (typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === 0) {
    return true;
  }

  return false;
};
