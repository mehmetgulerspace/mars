import { mergeArrays } from './mergeArrays';

describe('mergeArrays function', () => {
  test('should merge multiple arrays into one with unique values by default', () => {
    const array1 = [1, 2, 3];
    const array2 = [2, 3, 4];
    const array3 = [4, 5, 6];
    expect(mergeArrays({ arrays: [array1, array2, array3] })).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should merge multiple arrays into one and keep duplicates if removeDuplicates is false', () => {
    const array1 = [1, 2, 2];
    const array2 = [2, 3, 4];
    expect(mergeArrays({ arrays: [array1, array2], removeDuplicates: false })).toEqual([1, 2, 2, 2, 3, 4]);
  });

  test('should handle empty arrays correctly', () => {
    const emptyArray: any[] = [];
    const array1 = [1, 2, 3];
    expect(mergeArrays({ arrays: [emptyArray, array1] })).toEqual([1, 2, 3]);
  });

  test('should return an empty array when all input arrays are empty', () => {
    const emptyArray1: any[] = [];
    const emptyArray2: any[] = [];
    expect(mergeArrays({ arrays: [emptyArray1, emptyArray2] })).toEqual([]);
  });
});
