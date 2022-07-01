export default class date {
  // Получить ату в виде строки
  static getDateString(d = new Date()) {
    const year = d.getFullYear();

    let month = d.getMonth() + 1;
    month = month < 10 ? `0${month}` : `${month}`;

    let date = d.getDate();
    date = date < 10 ? `0${date}` : `${date}`;

    return `${year}-${month}-${date}`;
  }

  // Получить следующий день
  static getNextDate(d = new Date()) {
    return new Date(d.getTime() + 1000 * 60 * 60 * 24);
  }

  // Первая дата больше второй даты
  static isFirstDateMoreSecondDate(x = new Date(), y = new Date()) {
    const timeX = x.getTime();
    const timeY = y.getTime();
    if (timeX > timeY) return true;
    return false;
  }

  // Разница между датами
  static differentDates(x = new Date(), y = new Date()) {
    const timeX = x.getTime();
    const timeY = y.getTime();
    return (timeY - timeX) / 1000 / 60 / 60 / 24;
  }

  static getDay(d = new Date()) {
    const day = d.getDay();
    if (day === 0) return 'Sun';
    if (day === 1) return 'Mon';
    if (day === 2) return 'Tue';
    if (day === 3) return 'Wen';
    if (day === 4) return 'Thu';
    if (day === 5) return 'Fri';
    if (day === 6) return 'Sat';
  }

  static isWeekend(d = new Date()) {
    const day = d.getDay();
    if (day === 0) return true; // Sunday
    if (day === 6) return true; // Saturday
    return false;
  }
}
