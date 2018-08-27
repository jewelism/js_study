const {modPhoneNumber, insertString} = require('./phoneNumber');

test('addDash Func test', () => {
  expect(modPhoneNumber('010868')).toBe('010-868');
  expect(modPhoneNumber('01086852005')).toBe('010-8685-2005');
  expect(modPhoneNumber('0108685200')).toBe('010-868-5200');
  expect(modPhoneNumber('0193194961')).toBe('019-319-4961');
});