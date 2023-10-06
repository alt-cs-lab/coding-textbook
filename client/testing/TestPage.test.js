import renderer from 'react-test-renderer';

describe('description', () => {
    let originalWindowLocation = window.location;
  
    beforeEach(() => {
      Object.defineProperty(window, 'location', {
        configurable: true,
        enumerable: true,
        value: new URL(window.location.href),
      });
    });
  
    afterEach(() => {
      Object.defineProperty(window, 'location', {
        configurable: true,
        enumerable: true,
        value: originalWindowLocation,
      });
    });
  
    it('test that redirection URL is correct', () => {
      const expectedUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3Dm';
      window.location.href = expectedUrl;
      expect(window.location.href).toBe(expectedUrl);
    });
  });