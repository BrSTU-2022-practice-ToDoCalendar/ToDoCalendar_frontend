import DateController from './DateController';

test('DateController.getNextDate() Получили следующий день?', () => {
  expect(DateController.getNextDate(2022, 1, 1).getDate()).toBe(2);
  expect(DateController.getNextDate(2022, 1, 2).getDate()).toBe(3);
  expect(DateController.getNextDate(2022, 1, 3).getDate()).toBe(4);

  expect(DateController.getNextDate(2022, 1, 31).getDate()).toBe(1);
  expect(DateController.getNextDate(2022, 2, 28).getDate()).toBe(1);
  expect(DateController.getNextDate(2022, 3, 31).getDate()).toBe(1);
  expect(DateController.getNextDate(2022, 4, 30).getDate()).toBe(1);
  expect(DateController.getNextDate(2022, 5, 31).getDate()).toBe(1);
  expect(DateController.getNextDate(2022, 6, 30).getDate()).toBe(1);
  expect(DateController.getNextDate(2022, 7, 31).getDate()).toBe(1);
  expect(DateController.getNextDate(2022, 8, 31).getDate()).toBe(1);
  expect(DateController.getNextDate(2022, 9, 30).getDate()).toBe(1);
  expect(DateController.getNextDate(2022, 10, 31).getDate()).toBe(1);
  expect(DateController.getNextDate(2022, 11, 30).getDate()).toBe(1);
  expect(DateController.getNextDate(2022, 12, 31).getDate()).toBe(1);
});
