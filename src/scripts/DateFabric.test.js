import DateFabric from './DateFabric';

test('Мы получили наш вариант дня недели?', () => {
  expect(DateFabric.getDate(new Date('2022-01-01'))).toBe(6);
  expect(DateFabric.getDate(new Date('2022-01-02'))).toBe(7);
  expect(DateFabric.getDate(new Date('2022-01-03'))).toBe(1);
  expect(DateFabric.getDate(new Date('2022-01-04'))).toBe(2);
  expect(DateFabric.getDate(new Date('2022-01-05'))).toBe(3);
  expect(DateFabric.getDate(new Date('2022-01-06'))).toBe(4);
  expect(DateFabric.getDate(new Date('2022-01-07'))).toBe(5);
  expect(DateFabric.getDate(new Date('2022-01-08'))).toBe(6);
  expect(DateFabric.getDate(new Date('2022-01-09'))).toBe(7);
});

test('Мы получили строковой день недели?', () => {
  expect(DateFabric.getStringDay(1)).toBe('Mon');
  expect(DateFabric.getStringDay(2)).toBe('Tue');
  expect(DateFabric.getStringDay(3)).toBe('Wen');
  expect(DateFabric.getStringDay(4)).toBe('Thu');
  expect(DateFabric.getStringDay(5)).toBe('Fri');
  expect(DateFabric.getStringDay(6)).toBe('Sat');
  expect(DateFabric.getStringDay(7)).toBe('Sun');
  expect(DateFabric.getStringDay(1, 'ru')).toBe('Пн');
  expect(DateFabric.getStringDay(2, 'ru')).toBe('Вт');
  expect(DateFabric.getStringDay(3, 'ru')).toBe('Ср');
  expect(DateFabric.getStringDay(4, 'ru')).toBe('Чт');
  expect(DateFabric.getStringDay(5, 'ru')).toBe('Пт');
  expect(DateFabric.getStringDay(6, 'ru')).toBe('Сб');
  expect(DateFabric.getStringDay(7, 'ru')).toBe('Вс');

  expect(DateFabric.getStringDay(-1)).toBe(undefined);
  expect(DateFabric.getStringDay(0)).toBe(undefined);
  expect(DateFabric.getStringDay(8)).toBe(undefined);

  expect(DateFabric.getStringDay(-1, 'ru')).toBe(undefined);
  expect(DateFabric.getStringDay(0, 'ru')).toBe(undefined);
  expect(DateFabric.getStringDay(8, 'ru')).toBe(undefined);
});

test('Мы получили строковой месяц?', () => {
  expect(DateFabric.getStringMonth(1)).toBe('Январь');
  expect(DateFabric.getStringMonth(2)).toBe('Февраль');
  expect(DateFabric.getStringMonth(3)).toBe('Март');
  expect(DateFabric.getStringMonth(4)).toBe('Апрель');
  expect(DateFabric.getStringMonth(5)).toBe('Май');
  expect(DateFabric.getStringMonth(6)).toBe('Июнь');
  expect(DateFabric.getStringMonth(7)).toBe('Июль');
  expect(DateFabric.getStringMonth(8)).toBe('Август');
  expect(DateFabric.getStringMonth(9)).toBe('Сентябрь');
  expect(DateFabric.getStringMonth(10)).toBe('Октябрь');
  expect(DateFabric.getStringMonth(11)).toBe('Ноябрь');
  expect(DateFabric.getStringMonth(12)).toBe('Декабрь');

  expect(DateFabric.getStringMonth(-1)).toBe(undefined);
  expect(DateFabric.getStringMonth(0)).toBe(undefined);
  expect(DateFabric.getStringMonth(13)).toBe(undefined);
});

test('Мы получили прямоугольный календаря делящий на 7?', () => {
  expect(DateFabric.getMonthDays(2022, 1).length % 7).toBe(0);
  expect(DateFabric.getMonthDays(2022, 2).length % 7).toBe(0);
  expect(DateFabric.getMonthDays(2022, 3).length % 7).toBe(0);
  expect(DateFabric.getMonthDays(2022, 4).length % 7).toBe(0);
  expect(DateFabric.getMonthDays(2022, 5).length % 7).toBe(0);
  expect(DateFabric.getMonthDays(2022, 6).length % 7).toBe(0);
  expect(DateFabric.getMonthDays(2022, 7).length % 7).toBe(0);
  expect(DateFabric.getMonthDays(2022, 8).length % 7).toBe(0);
  expect(DateFabric.getMonthDays(2022, 9).length % 7).toBe(0);
  expect(DateFabric.getMonthDays(2022, 10).length % 7).toBe(0);
  expect(DateFabric.getMonthDays(2022, 11).length % 7).toBe(0);
  expect(DateFabric.getMonthDays(2022, 12).length % 7).toBe(0);
  expect(DateFabric.getMonthDays(2021, 2).length % 7).toBe(0);
  expect(DateFabric.getMonthDays(2020, 2).length % 7).toBe(0);
  expect(DateFabric.getMonthDays(2019, 2).length % 7).toBe(0);
  expect(DateFabric.getMonthDays(2018, 2).length % 7).toBe(0);
  expect(DateFabric.getMonthDays(2017, 2).length % 7).toBe(0);
  expect(DateFabric.getMonthDays(2016, 2).length % 7).toBe(0);
  expect(DateFabric.getMonthDays(2015, 2).length % 7).toBe(0);
  expect(DateFabric.getMonthDays(2014, 2).length % 7).toBe(0);
  expect(DateFabric.getMonthDays(2013, 2).length % 7).toBe(0);
  expect(DateFabric.getMonthDays(2012, 2).length % 7).toBe(0);
  expect(DateFabric.getMonthDays(2011, 2).length % 7).toBe(0);
  expect(DateFabric.getMonthDays(2010, 2).length % 7).toBe(0);
  expect(DateFabric.getMonthDays(2009, 2).length % 7).toBe(0);
  expect(DateFabric.getMonthDays(2008, 2).length % 7).toBe(0);
});

test('Первый день это понеделник в кадратном календаре?', () => {
  expect(DateFabric.getMonthDays(2022, 1)[0].Date.getDay()).toBe(1);
  expect(DateFabric.getMonthDays(2022, 2)[0].Date.getDay()).toBe(1);
  expect(DateFabric.getMonthDays(2022, 3)[0].Date.getDay()).toBe(1);
  expect(DateFabric.getMonthDays(2022, 4)[0].Date.getDay()).toBe(1);
  expect(DateFabric.getMonthDays(2022, 5)[0].Date.getDay()).toBe(1);
  expect(DateFabric.getMonthDays(2022, 6)[0].Date.getDay()).toBe(1);
  expect(DateFabric.getMonthDays(2022, 7)[0].Date.getDay()).toBe(1);
  expect(DateFabric.getMonthDays(2022, 8)[0].Date.getDay()).toBe(1);
  expect(DateFabric.getMonthDays(2022, 9)[0].Date.getDay()).toBe(1);
  expect(DateFabric.getMonthDays(2022, 10)[0].Date.getDay()).toBe(1);
  expect(DateFabric.getMonthDays(2022, 11)[0].Date.getDay()).toBe(1);
  expect(DateFabric.getMonthDays(2022, 12)[0].Date.getDay()).toBe(1);
});

test('Последний день это воскресенье в кадратном календаре?', () => {
  expect(DateFabric.getMonthDays(2022, 1).pop().Date.getDay()).toBe(0);
  expect(DateFabric.getMonthDays(2022, 2).pop().Date.getDay()).toBe(0);
  expect(DateFabric.getMonthDays(2022, 3).pop().Date.getDay()).toBe(0);
  expect(DateFabric.getMonthDays(2022, 4).pop().Date.getDay()).toBe(0);
  expect(DateFabric.getMonthDays(2022, 5).pop().Date.getDay()).toBe(0);
  expect(DateFabric.getMonthDays(2022, 6).pop().Date.getDay()).toBe(0);
  expect(DateFabric.getMonthDays(2022, 7).pop().Date.getDay()).toBe(0);
  expect(DateFabric.getMonthDays(2022, 8).pop().Date.getDay()).toBe(0);
  expect(DateFabric.getMonthDays(2022, 9).pop().Date.getDay()).toBe(0);
  expect(DateFabric.getMonthDays(2022, 10).pop().Date.getDay()).toBe(0);
  expect(DateFabric.getMonthDays(2022, 11).pop().Date.getDay()).toBe(0);
  expect(DateFabric.getMonthDays(2022, 12).pop().Date.getDay()).toBe(0);
});

test('Получили следующий месяц?', () => {
  expect(DateFabric.getNextMonth(2022, 1).getMonth() + 1).toBe(2);
  expect(DateFabric.getNextMonth(2022, 2).getMonth() + 1).toBe(3);
  expect(DateFabric.getNextMonth(2022, 3).getMonth() + 1).toBe(4);
  expect(DateFabric.getNextMonth(2022, 4).getMonth() + 1).toBe(5);
  expect(DateFabric.getNextMonth(2022, 5).getMonth() + 1).toBe(6);
  expect(DateFabric.getNextMonth(2022, 6).getMonth() + 1).toBe(7);
  expect(DateFabric.getNextMonth(2022, 7).getMonth() + 1).toBe(8);
  expect(DateFabric.getNextMonth(2022, 8).getMonth() + 1).toBe(9);
  expect(DateFabric.getNextMonth(2022, 9).getMonth() + 1).toBe(10);
  expect(DateFabric.getNextMonth(2022, 10).getMonth() + 1).toBe(11);
  expect(DateFabric.getNextMonth(2022, 11).getMonth() + 1).toBe(12);
  expect(DateFabric.getNextMonth(2022, 12).getMonth() + 1).toBe(1);

  expect(DateFabric.getNextMonth(2022, 1).getFullYear()).toBe(2022);
  expect(DateFabric.getNextMonth(2022, 2).getFullYear()).toBe(2022);
  expect(DateFabric.getNextMonth(2022, 3).getFullYear()).toBe(2022);
  expect(DateFabric.getNextMonth(2022, 4).getFullYear()).toBe(2022);
  expect(DateFabric.getNextMonth(2022, 5).getFullYear()).toBe(2022);
  expect(DateFabric.getNextMonth(2022, 6).getFullYear()).toBe(2022);
  expect(DateFabric.getNextMonth(2022, 7).getFullYear()).toBe(2022);
  expect(DateFabric.getNextMonth(2022, 8).getFullYear()).toBe(2022);
  expect(DateFabric.getNextMonth(2022, 9).getFullYear()).toBe(2022);
  expect(DateFabric.getNextMonth(2022, 10).getFullYear()).toBe(2022);
  expect(DateFabric.getNextMonth(2022, 11).getFullYear()).toBe(2022);
  expect(DateFabric.getNextMonth(2022, 12).getFullYear()).toBe(2023);
});

test('Получили предыдущий месяц?', () => {
  expect(DateFabric.getPrevMonth(2022, 1).getMonth() + 1).toBe(12);
  expect(DateFabric.getPrevMonth(2022, 2).getMonth() + 1).toBe(1);
  expect(DateFabric.getPrevMonth(2022, 3).getMonth() + 1).toBe(2);
  expect(DateFabric.getPrevMonth(2022, 4).getMonth() + 1).toBe(3);
  expect(DateFabric.getPrevMonth(2022, 5).getMonth() + 1).toBe(4);
  expect(DateFabric.getPrevMonth(2022, 6).getMonth() + 1).toBe(5);
  expect(DateFabric.getPrevMonth(2022, 7).getMonth() + 1).toBe(6);
  expect(DateFabric.getPrevMonth(2022, 8).getMonth() + 1).toBe(7);
  expect(DateFabric.getPrevMonth(2022, 9).getMonth() + 1).toBe(8);
  expect(DateFabric.getPrevMonth(2022, 10).getMonth() + 1).toBe(9);
  expect(DateFabric.getPrevMonth(2022, 11).getMonth() + 1).toBe(10);
  expect(DateFabric.getPrevMonth(2022, 12).getMonth() + 1).toBe(11);

  expect(DateFabric.getPrevMonth(2022, 1).getFullYear()).toBe(2021);
  expect(DateFabric.getPrevMonth(2022, 2).getFullYear()).toBe(2022);
  expect(DateFabric.getPrevMonth(2022, 3).getFullYear()).toBe(2022);
  expect(DateFabric.getPrevMonth(2022, 4).getFullYear()).toBe(2022);
  expect(DateFabric.getPrevMonth(2022, 5).getFullYear()).toBe(2022);
  expect(DateFabric.getPrevMonth(2022, 6).getFullYear()).toBe(2022);
  expect(DateFabric.getPrevMonth(2022, 7).getFullYear()).toBe(2022);
  expect(DateFabric.getPrevMonth(2022, 8).getFullYear()).toBe(2022);
  expect(DateFabric.getPrevMonth(2022, 9).getFullYear()).toBe(2022);
  expect(DateFabric.getPrevMonth(2022, 10).getFullYear()).toBe(2022);
  expect(DateFabric.getPrevMonth(2022, 11).getFullYear()).toBe(2022);
  expect(DateFabric.getPrevMonth(2022, 12).getFullYear()).toBe(2022);
});
