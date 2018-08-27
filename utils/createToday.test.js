const {createToday} = require('./createToday');

test('createToday Func test', () => {
  expect(createToday('11:11:00').toString()).toBe('Fri Aug 10 2018 11:11:00 GMT+0900 (KST)');
  expect(createToday('00:00:00').toString()).toBe('Fri Aug 10 2018 00:00:00 GMT+0900 (KST)');
});
