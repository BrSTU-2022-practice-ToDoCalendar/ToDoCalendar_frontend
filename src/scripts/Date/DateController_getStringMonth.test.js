import DateController from './DateController';

test('DateController.getStringMonth() Мы получили строковой месяц?', () => {
  expect(DateController.getStringMonth(1)).toBe('Январь');
  expect(DateController.getStringMonth(2)).toBe('Февраль');
  expect(DateController.getStringMonth(3)).toBe('Март');
  expect(DateController.getStringMonth(4)).toBe('Апрель');
  expect(DateController.getStringMonth(5)).toBe('Май');
  expect(DateController.getStringMonth(6)).toBe('Июнь');
  expect(DateController.getStringMonth(7)).toBe('Июль');
  expect(DateController.getStringMonth(8)).toBe('Август');
  expect(DateController.getStringMonth(9)).toBe('Сентябрь');
  expect(DateController.getStringMonth(10)).toBe('Октябрь');
  expect(DateController.getStringMonth(11)).toBe('Ноябрь');
  expect(DateController.getStringMonth(12)).toBe('Декабрь');

  expect(DateController.getStringMonth(-1)).toBe(undefined);
  expect(DateController.getStringMonth(0)).toBe(undefined);
  expect(DateController.getStringMonth(13)).toBe(undefined);
});
