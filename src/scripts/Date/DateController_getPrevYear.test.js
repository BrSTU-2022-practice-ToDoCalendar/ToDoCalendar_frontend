import DateController from './DateController';

test('DateController.getPrevYear() Получили предыдущий год?', () => {
  expect(DateController.getPrevYear(2022)).toBe('2021');
  expect(DateController.getPrevYear(2021)).toBe('2020');

  expect(DateController.getPrevYear('2020')).toBe('2019');
  expect(DateController.getPrevYear('2019')).toBe('2018');

  expect(DateController.getPrevYear('1000')).toBe('0999');
  expect(DateController.getPrevYear('0999')).toBe('0998');

  expect(DateController.getPrevYear('0001')).toBe('0000');
  expect(DateController.getPrevYear('0000')).toBe('-000001');

  expect(DateController.getPrevYear('-000001')).toBe('-000002');
  expect(DateController.getPrevYear('-000002')).toBe('-000003');
  expect(DateController.getPrevYear('-000003')).toBe('-000004');

  expect(DateController.getPrevYear('-000009')).toBe('-000010');
  expect(DateController.getPrevYear('-000019')).toBe('-000020');
});
