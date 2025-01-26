import { objectToQueryString } from './objectToQueryString';

describe('objectToQueryString function', () => {
  test('should convert a simple object to a query string', () => {
    const params = {
      search: 'test',
      page: 1
    };
    expect(objectToQueryString(params)).toBe('?search=test&page=1');
  });

  test('should handle special characters', () => {
    const params = {
      search: 'hello world',
      filter: 'a+b=c'
    };
    expect(objectToQueryString(params)).toBe('?search=hello%20world&filter=a%2Bb%3Dc');
  });

  test('should ignore null or undefined values', () => {
    const params = {
      search: 'test',
      filter: null,
      sort: undefined
    };
    expect(objectToQueryString(params)).toBe('?search=test');
  });

  test('should return an empty string for an empty object', () => {
    const params = {};
    expect(objectToQueryString(params)).toBe('');
  });
});
