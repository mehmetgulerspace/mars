/**
 * Options for the mergeArrays function.
 * @template T The type of elements in the arrays.
 */
type MergeArraysOptions<T> = {
  arrays: T[][];
  removeDuplicates?: boolean;
};

/**
 * Merges multiple arrays into one array, optionally removing duplicates.
 * Uses the provided configuration options to determine how arrays are merged.
 *
 * @param {MergeArraysOptions<T>} options - Configuration options which include the arrays to merge and whether duplicates should be removed.
 * @returns {T[]} A new array containing all elements from the input arrays, with duplicates removed if specified.
 */
export const mergeArrays = <T>({ arrays, removeDuplicates = true }: MergeArraysOptions<T>): T[] => {
  // Flatten the array of arrays into a single array.
  const mergedArray = arrays.flat();

  // Use a Set to remove duplicates if requested.
  return removeDuplicates ? Array.from(new Set(mergedArray)) : mergedArray;
};
