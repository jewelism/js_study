const {insertString} = require('./insertString');

test('insertString', () => {
  const boseokString = 'boseok test';
  expect(insertString(boseokString, boseokString.indexOf(' '), 1)).toBe('boseok1 test');
  expect(insertString('12345', 0, 0)).toBe('012345');
})
