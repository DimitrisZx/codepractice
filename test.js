const reverseString = require('./code/reverseString');

describe('Reverses string correctly', () => {

  test('Reverses string correctly when a non emtpy string is provided', () => {
    expect(reverseString('abc')).toBe('cba');
  })

  test('Returns an empty string when an empty string is provided', () => {
    expect(reverseString('abc')).toBe('cba');
  })
});