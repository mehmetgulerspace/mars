import { isEmpty } from './isEmpty';

describe('isEmpty function', () => {
  test('should return true for null', () => {
    expect(isEmpty(null)).toBe(true);
  });

  test('should return true for an empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  test('should return true for an empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  test('should return false for a non-empty string', () => {
    expect(isEmpty('hello')).toBe(false);
  });

  test('should return false for a non-empty object', () => {
    expect(isEmpty({ key: 'value' })).toBe(false);
  });
});
