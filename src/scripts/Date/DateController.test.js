import DateController from './DateController';

test('Мы получили наш вариант дня недели?', () => {
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

test('Мы получили строковой день недели?', () => {
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

test('Мы получили строковой месяц?', () => {
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

test('Мы получили прямоугольный календаря делящий на 7?', () => {
  expect(DateController.getMonthDays(2022, 1).length % 7).toBe(0);
  expect(DateController.getMonthDays(2022, 2).length % 7).toBe(0);
  expect(DateController.getMonthDays(2022, 3).length % 7).toBe(0);
  expect(DateController.getMonthDays(2022, 4).length % 7).toBe(0);
  expect(DateController.getMonthDays(2022, 5).length % 7).toBe(0);
  expect(DateController.getMonthDays(2022, 6).length % 7).toBe(0);
  expect(DateController.getMonthDays(2022, 7).length % 7).toBe(0);
  expect(DateController.getMonthDays(2022, 8).length % 7).toBe(0);
  expect(DateController.getMonthDays(2022, 9).length % 7).toBe(0);
  expect(DateController.getMonthDays(2022, 10).length % 7).toBe(0);
  expect(DateController.getMonthDays(2022, 11).length % 7).toBe(0);
  expect(DateController.getMonthDays(2022, 12).length % 7).toBe(0);
  expect(DateController.getMonthDays(2021, 2).length % 7).toBe(0);
  expect(DateController.getMonthDays(2020, 2).length % 7).toBe(0);
  expect(DateController.getMonthDays(2019, 2).length % 7).toBe(0);
  expect(DateController.getMonthDays(2018, 2).length % 7).toBe(0);
  expect(DateController.getMonthDays(2017, 2).length % 7).toBe(0);
  expect(DateController.getMonthDays(2016, 2).length % 7).toBe(0);
  expect(DateController.getMonthDays(2015, 2).length % 7).toBe(0);
  expect(DateController.getMonthDays(2014, 2).length % 7).toBe(0);
  expect(DateController.getMonthDays(2013, 2).length % 7).toBe(0);
  expect(DateController.getMonthDays(2012, 2).length % 7).toBe(0);
  expect(DateController.getMonthDays(2011, 2).length % 7).toBe(0);
  expect(DateController.getMonthDays(2010, 2).length % 7).toBe(0);
  expect(DateController.getMonthDays(2009, 2).length % 7).toBe(0);
  expect(DateController.getMonthDays(2008, 2).length % 7).toBe(0);
});

test('Первый день это понеделник в кадратном календаре?', () => {
  let real;

  real = new Date(DateController.getMonthDays(2022, 1)[0]?.date).getDay();
  expect(real).toBe(1);

  real = new Date(DateController.getMonthDays(2022, 2)[0]?.date).getDay();
  expect(real).toBe(1);

  real = new Date(DateController.getMonthDays(2022, 3)[0]?.date).getDay();
  expect(real).toBe(1);

  real = new Date(DateController.getMonthDays(2022, 4)[0]?.date).getDay();
  expect(real).toBe(1);

  real = new Date(DateController.getMonthDays(2022, 5)[0]?.date).getDay();
  expect(real).toBe(1);

  real = new Date(DateController.getMonthDays(2022, 6)[0]?.date).getDay();
  expect(real).toBe(1);

  real = new Date(DateController.getMonthDays(2022, 7)[0]?.date).getDay();
  expect(real).toBe(1);

  real = new Date(DateController.getMonthDays(2022, 8)[0]?.date).getDay();
  expect(real).toBe(1);

  real = new Date(DateController.getMonthDays(2022, 9)[0]?.date).getDay();
  expect(real).toBe(1);

  real = new Date(DateController.getMonthDays(2022, 10)[0]?.date).getDay();
  expect(real).toBe(1);

  real = new Date(DateController.getMonthDays(2022, 11)[0]?.date).getDay();
  expect(real).toBe(1);

  real = new Date(DateController.getMonthDays(2022, 12)[0]?.date).getDay();
  expect(real).toBe(1);
});

test('Последний день это воскресенье в кадратном календаре?', () => {
  let real;

  real = new Date(DateController.getMonthDays(2022, 1).pop()?.date).getDay();
  expect(real).toBe(0);

  real = new Date(DateController.getMonthDays(2022, 2).pop()?.date).getDay();
  expect(real).toBe(0);

  real = new Date(DateController.getMonthDays(2022, 3).pop()?.date).getDay();
  expect(real).toBe(0);

  real = new Date(DateController.getMonthDays(2022, 4).pop()?.date).getDay();
  expect(real).toBe(0);

  real = new Date(DateController.getMonthDays(2022, 5).pop()?.date).getDay();
  expect(real).toBe(0);

  real = new Date(DateController.getMonthDays(2022, 6).pop()?.date).getDay();
  expect(real).toBe(0);

  real = new Date(DateController.getMonthDays(2022, 7).pop()?.date).getDay();
  expect(real).toBe(0);

  real = new Date(DateController.getMonthDays(2022, 8).pop()?.date).getDay();
  expect(real).toBe(0);

  real = new Date(DateController.getMonthDays(2022, 9).pop()?.date).getDay();
  expect(real).toBe(0);

  real = new Date(DateController.getMonthDays(2022, 10).pop()?.date).getDay();
  expect(real).toBe(0);

  real = new Date(DateController.getMonthDays(2022, 11).pop()?.date).getDay();
  expect(real).toBe(0);

  real = new Date(DateController.getMonthDays(2022, 12).pop()?.date).getDay();
  expect(real).toBe(0);
});

test('Получили следующий месяц?', () => {
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

test('Получили предыдущий месяц?', () => {
  expect(DateController.getPrevMonth(2022, 1).getMonth() + 1).toBe(12);
  expect(DateController.getPrevMonth(2022, 2).getMonth() + 1).toBe(1);
  expect(DateController.getPrevMonth(2022, 3).getMonth() + 1).toBe(2);
  expect(DateController.getPrevMonth(2022, 4).getMonth() + 1).toBe(3);
  expect(DateController.getPrevMonth(2022, 5).getMonth() + 1).toBe(4);
  expect(DateController.getPrevMonth(2022, 6).getMonth() + 1).toBe(5);
  expect(DateController.getPrevMonth(2022, 7).getMonth() + 1).toBe(6);
  expect(DateController.getPrevMonth(2022, 8).getMonth() + 1).toBe(7);
  expect(DateController.getPrevMonth(2022, 9).getMonth() + 1).toBe(8);
  expect(DateController.getPrevMonth(2022, 10).getMonth() + 1).toBe(9);
  expect(DateController.getPrevMonth(2022, 11).getMonth() + 1).toBe(10);
  expect(DateController.getPrevMonth(2022, 12).getMonth() + 1).toBe(11);

  expect(DateController.getPrevMonth(2022, 1).getFullYear()).toBe(2021);
  expect(DateController.getPrevMonth(2022, 2).getFullYear()).toBe(2022);
  expect(DateController.getPrevMonth(2022, 3).getFullYear()).toBe(2022);
  expect(DateController.getPrevMonth(2022, 4).getFullYear()).toBe(2022);
  expect(DateController.getPrevMonth(2022, 5).getFullYear()).toBe(2022);
  expect(DateController.getPrevMonth(2022, 6).getFullYear()).toBe(2022);
  expect(DateController.getPrevMonth(2022, 7).getFullYear()).toBe(2022);
  expect(DateController.getPrevMonth(2022, 8).getFullYear()).toBe(2022);
  expect(DateController.getPrevMonth(2022, 9).getFullYear()).toBe(2022);
  expect(DateController.getPrevMonth(2022, 10).getFullYear()).toBe(2022);
  expect(DateController.getPrevMonth(2022, 11).getFullYear()).toBe(2022);
  expect(DateController.getPrevMonth(2022, 12).getFullYear()).toBe(2022);
});
