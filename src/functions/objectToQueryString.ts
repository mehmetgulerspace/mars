/**
 * Converts an object into a query string for use in URLs.
 * @param params - The object to convert to a query string.
 * @returns A query string starting with '?' or an empty string if the object is empty.
 */
export const objectToQueryString = (params: Record<string, any>): string => {
  const queryString = Object.entries(params)
    .map(([key, value]) => {
      if (value === undefined || value === null) return null; // Ignore undefined or null values
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .filter(Boolean) // Remove null values
    .join('&');

  return queryString ? `?${queryString}` : '';
};
