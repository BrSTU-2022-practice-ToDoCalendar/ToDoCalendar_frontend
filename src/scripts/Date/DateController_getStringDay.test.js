import DateController from './DateController';

test('DateController.getStringDay() Мы получили строковой день недели?', () => {
  expect(DateController.getStringDay(0)).toBe('Sun');
  expect(DateController.getStringDay(1)).toBe('Mon');
  expect(DateController.getStringDay(2)).toBe('Tue');
  expect(DateController.getStringDay(3)).toBe('Wen');
  expect(DateController.getStringDay(4)).toBe('Thu');
  expect(DateController.getStringDay(5)).toBe('Fri');
  expect(DateController.getStringDay(6)).toBe('Sat');
  expect(DateController.getStringDay(7)).toBe('Sun');
  expect(DateController.getStringDay(0, 'ru')).toBe('Вс');
  expect(DateController.getStringDay(1, 'ru')).toBe('Пн');
  expect(DateController.getStringDay(2, 'ru')).toBe('Вт');
  expect(DateController.getStringDay(3, 'ru')).toBe('Ср');
  expect(DateController.getStringDay(4, 'ru')).toBe('Чт');
  expect(DateController.getStringDay(5, 'ru')).toBe('Пт');
  expect(DateController.getStringDay(6, 'ru')).toBe('Сб');
  expect(DateController.getStringDay(7, 'ru')).toBe('Вс');

  expect(DateController.getStringDay(-1)).toBe(undefined);
  expect(DateController.getStringDay(8)).toBe(undefined);

  expect(DateController.getStringDay(-1, 'ru')).toBe(undefined);
  expect(DateController.getStringDay(8, 'ru')).toBe(undefined);
});
