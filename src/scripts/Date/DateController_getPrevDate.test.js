import DateController from './DateController';

test('DateController.getPrevDate() Получили предыдущий день?', () => {
  expect(DateController.getPrevDate(2022, 1, 1).getDate()).toBe(31);
  expect(DateController.getPrevDate(2022, 1, 2).getDate()).toBe(1);
  expect(DateController.getPrevDate(2022, 1, 3).getDate()).toBe(2);

  expect(DateController.getPrevDate(2022, 1, 1).getDate()).toBe(31);
  expect(DateController.getPrevDate(2022, 2, 1).getDate()).toBe(31);
  expect(DateController.getPrevDate(2022, 3, 1).getDate()).toBe(28);
  expect(DateController.getPrevDate(2022, 4, 1).getDate()).toBe(31);
  expect(DateController.getPrevDate(2022, 5, 1).getDate()).toBe(30);
  expect(DateController.getPrevDate(2022, 6, 1).getDate()).toBe(31);
  expect(DateController.getPrevDate(2022, 7, 1).getDate()).toBe(30);
  expect(DateController.getPrevDate(2022, 8, 1).getDate()).toBe(31);
  expect(DateController.getPrevDate(2022, 9, 1).getDate()).toBe(31);
  expect(DateController.getPrevDate(2022, 10, 1).getDate()).toBe(30);
  expect(DateController.getPrevDate(2022, 11, 1).getDate()).toBe(31);
  expect(DateController.getPrevDate(2022, 12, 1).getDate()).toBe(30);
  expect(DateController.getPrevDate(2023, 1, 1).getDate()).toBe(31);
});
