/**
 * Filters an array of objects based on a specified property and value.
 * @param items - Array of objects to be filtered.
 * @param property - The property to filter by. Must be a key of the object in the array.
 * @param value - The value that the property should match for inclusion in the result.
 * @returns Filtered array of objects where the specified property matches the given value.
 */
export const filterByProperty = <T>(items: T[], property: keyof T, value: any): T[] => {
  return items.filter((item) => item[property] === value);
};
