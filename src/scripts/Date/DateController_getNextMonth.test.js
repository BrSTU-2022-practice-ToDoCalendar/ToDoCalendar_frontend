import DateController from './DateController';

test('DateController.getNextMonth() Получили следующий месяц?', () => {
  expect(DateController.getNextMonth(2022, 1).getMonth() + 1).toBe(2);
  expect(DateController.getNextMonth(2022, 2).getMonth() + 1).toBe(3);
  expect(DateController.getNextMonth(2022, 3).getMonth() + 1).toBe(4);
  expect(DateController.getNextMonth(2022, 4).getMonth() + 1).toBe(5);
  expect(DateController.getNextMonth(2022, 5).getMonth() + 1).toBe(6);
  expect(DateController.getNextMonth(2022, 6).getMonth() + 1).toBe(7);
  expect(DateController.getNextMonth(2022, 7).getMonth() + 1).toBe(8);
  expect(DateController.getNextMonth(2022, 8).getMonth() + 1).toBe(9);
  expect(DateController.getNextMonth(2022, 9).getMonth() + 1).toBe(10);
  expect(DateController.getNextMonth(2022, 10).getMonth() + 1).toBe(11);
  expect(DateController.getNextMonth(2022, 11).getMonth() + 1).toBe(12);
  expect(DateController.getNextMonth(2022, 12).getMonth() + 1).toBe(1);

  expect(DateController.getNextMonth(2022, 1).getFullYear()).toBe(2022);
  expect(DateController.getNextMonth(2022, 2).getFullYear()).toBe(2022);
  expect(DateController.getNextMonth(2022, 3).getFullYear()).toBe(2022);
  expect(DateController.getNextMonth(2022, 4).getFullYear()).toBe(2022);
  expect(DateController.getNextMonth(2022, 5).getFullYear()).toBe(2022);
  expect(DateController.getNextMonth(2022, 6).getFullYear()).toBe(2022);
  expect(DateController.getNextMonth(2022, 7).getFullYear()).toBe(2022);
  expect(DateController.getNextMonth(2022, 8).getFullYear()).toBe(2022);
  expect(DateController.getNextMonth(2022, 9).getFullYear()).toBe(2022);
  expect(DateController.getNextMonth(2022, 10).getFullYear()).toBe(2022);
  expect(DateController.getNextMonth(2022, 11).getFullYear()).toBe(2022);
  expect(DateController.getNextMonth(2022, 12).getFullYear()).toBe(2023);
});
