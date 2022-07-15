import DateController from './DateController';

test('DateController.getNextYear() Получили следующий год?', () => {
  expect(DateController.getNextYear(2022)).toBe('2023');
  expect(DateController.getNextYear(2021)).toBe('2022');

  expect(DateController.getNextYear('2020')).toBe('2021');
  expect(DateController.getNextYear('2019')).toBe('2020');

  expect(DateController.getNextYear('1000')).toBe('1001');
  expect(DateController.getNextYear('0999')).toBe('1000');

  expect(DateController.getNextYear('0000')).toBe('0001');
  expect(DateController.getNextYear('-000001')).toBe('0000');

  expect(DateController.getNextYear('-000002')).toBe('-000001');
  expect(DateController.getNextYear('-000003')).toBe('-000002');
  expect(DateController.getNextYear('-000004')).toBe('-000003');

  expect(DateController.getNextYear('-000010')).toBe('-000009');
  expect(DateController.getNextYear('-000020')).toBe('-000019');
});
