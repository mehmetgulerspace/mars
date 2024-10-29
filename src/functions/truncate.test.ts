import { truncate } from './truncate';

describe('truncate function', () => {
  test('should truncate a string to the specified length', () => {
    expect(truncate('Hello, world!', 5)).toBe('Hello...');
  });

  test('should not truncate a string shorter than the specified length', () => {
    expect(truncate('Hello, world!', 15)).toBe('Hello, world!');
  });

  test('should return an empty string if the input string is falsy', () => {
    expect(truncate('', 5)).toBe('');
  });
});