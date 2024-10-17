import { capitalize } from './capitalize';

describe('capitalize function', () => {
  test('should capitalize the first letter of a lowercase word', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('should return the same word if the first letter is already capitalized', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });

  test('should capitalize the first letter and make the rest lowercase', () => {
    expect(capitalize('hELLO')).toBe('Hello');
  });

  test('should handle empty strings and return an empty string', () => {
    expect(capitalize('')).toBe('');
  });

  test('should handle strings with only one character', () => {
    expect(capitalize('h')).toBe('H');
  });

  test('should capitalize strings with leading whitespace', () => {
    expect(capitalize('  hello')).toBe('  hello');
  });
});