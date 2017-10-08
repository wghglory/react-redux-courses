import expect from 'expect';
import { authorsFormattedForDropdown } from './selectors';

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for use in a dropdown', () => {
      const authors = [
        { id: 'guanghui-wang', firstName: 'Guanghui', lastName: 'Wang' },
        { id: 'scott-allen', firstName: 'Scott', lastName: 'Allen' }
      ];

      const expected = [
        { value: 'guanghui-wang', text: 'Guanghui Wang' },
        { value: 'scott-allen', text: 'Scott Allen' }
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
