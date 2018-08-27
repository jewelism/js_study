const {fixTwoDigits} = require('./fixTwoDigits');

test('fixTwoDigits Func test', () => {
  expect(fixTwoDigits(0)).toBe('00');
  expect(fixTwoDigits(5)).toBe('05');
  expect(fixTwoDigits(9)).toBe('09');
});
