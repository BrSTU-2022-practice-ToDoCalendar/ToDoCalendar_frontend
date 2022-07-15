import DateController from './DateController';

test('DateController.getDate() Мы получили день недели', () => {
  expect(DateController.getDate(new Date('2022-01-01'))).toBe(6);
  expect(DateController.getDate(new Date('2022-01-02'))).toBe(7);
  expect(DateController.getDate(new Date('2022-01-03'))).toBe(1);
  expect(DateController.getDate(new Date('2022-01-04'))).toBe(2);
  expect(DateController.getDate(new Date('2022-01-05'))).toBe(3);
  expect(DateController.getDate(new Date('2022-01-06'))).toBe(4);
  expect(DateController.getDate(new Date('2022-01-07'))).toBe(5);
  expect(DateController.getDate(new Date('2022-01-08'))).toBe(6);
  expect(DateController.getDate(new Date('2022-01-09'))).toBe(7);
});
