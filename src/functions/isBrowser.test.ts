import { isBrowser } from './isBrowser';

describe('isBrowser', () => {
  afterEach(() => {
    // Reset the global object
    delete (global as any).window;
    delete (global as any).document;
  });

  test('should return true when in a browser-like environment', () => {
    // Make it look like we're in a browser-like environment
    (global as any).window = {};
    (global as any).document = {};

    expect(isBrowser()).toBe(true);
  });

  test('should return false when in a Node.js environment', () => {
    expect(isBrowser()).toBe(false);
  });
});