export default class DateFabric {
  /**
   * Функция, возвращает наш день недели
   * @param {*} d - объект даты
   * @returns {number} - номер дня недели
   */
  static getDate(d = new Date()) {
    let day = d.getDay();
    if (day === 0) return 7;
    return day;
  }

  static getStringDay(day, lang = 'en') {
    if (lang === 'ru') {
      const ru = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
      return ru[day - 1];
    }
    const en = ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'];
    return en[day - 1];
  }

  static getStringMonth(month) {
    const ru = [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ];
    return ru[month - 1];
  }

  /**
   * Функция сгенерирует массив текущего месяца с пустотами спереди и взади
   * @param {*} year - год
   * @param {*} month - месяц
   * @returns {array}
   * Получаем прямоугольний массив делящий на 7 текущего месяца
   */
  static getMonthDays(year, month) {
    year = Number(year);
    month = Number(month);
    let array = [];
    const first_date = new Date(`${year}-${month}`);
    for (let i = 0; i < 31; ++i) {
      let date_i = new Date(first_date.getTime() + 1000 * 60 * 60 * 24 * i);
      let month_i = date_i.getMonth() + 1;
      if (month_i === month) {
        array.push({
          Date: date_i,
          json: date_i.toJSON(),
          date: date_i.getDate(),
          month: date_i.getMonth() + 1,
          year: date_i.getFullYear(),
          isThisMonth: true,
          tasks: [],
          has_not_completed_task: false,
          has_completed_task: false,
        });
      } else {
        break;
      }
    }

    // 0 воскресенье, 1 понедельник, 2 вторник, 3 среда, 4 четверг, 5 пятница, 6 суббота
    // Если это воскресенье, то ничего не добавлять в начало массив
    // Если это 1 понедельник, то добавить воскресение в начало массива
    // Если это 2 вторник, то добавить понедельник, воскресение в начало массива
    // Если это 3 среда, то добавить вторник, понедельник, воскресение в начало массива
    // Если это 4 четверг, то добавить среду, четверг, пятницу, субботу, воскресенье в начало массива
    // Если это 5 пятница, то добавить четверг, среду, четверг, пятницу, субботу, воскресенье в начало массива
    // Если это 6 суббота, то добавить пятницу, четверг, среду, четверг, пятницу, субботу, воскресенье в начало массива
    for (let i = 1; i < DateFabric.getDate(first_date); ++i) {
      let date_i = new Date(first_date.getTime() - 1000 * 60 * 60 * 24 * i);
      array = [
        {
          Date: date_i,
          json: date_i.toJSON(),
          date: date_i.getDate(),
          month: date_i.getMonth() + 1,
          year: date_i.getFullYear(),
          isThisMonth: false,
          tasks: [],
          has_not_completed_task: false,
          has_completed_task: false,
        },
        ...array,
      ];
    }

    // Если это понедельник, то добавляю вторник, среду, четверг, пятницу, субботу, воскресенье
    // Если это вторник, то добавляю среду, четверг, пятницу, субботу, воскресенье
    // Если это среда, то добавляю четверг, пятницу, субботу, воскресенье
    // Если это четвверг, то добавляю  пятницу, субботу, воскресенье
    // Если это пятница, то добавляю субботу, воскресенье
    // Если это суббота, то добавляю воскресенье
    // Если это восресенье, то ничего не добавляю в конец массива
    let last_date = array[array.length - 1].Date;
    for (let i = 1; i <= 7 - DateFabric.getDate(last_date); ++i) {
      let date_i = new Date(last_date.getTime() + 1000 * 60 * 60 * 24 * i);
      array.push({
        Date: date_i,
        json: date_i.toJSON(),
        date: date_i.getDate(),
        month: date_i.getMonth() + 1,
        year: date_i.getFullYear(),
        isThisMonth: false,
        tasks: [],
        has_not_completed_task: false,
        has_completed_task: false,
      });
    }

    last_date = array[array.length - 1].Date;
    if (array.length / 7 === 4) {
      for (let i = 1; i <= 7; ++i) {
        let date_i = new Date(last_date.getTime() + 1000 * 60 * 60 * 24 * i);
        array.push({
          Date: date_i,
          json: date_i.toJSON(),
          date: date_i.getDate(),
          month: date_i.getMonth() + 1,
          year: date_i.getFullYear(),
          isThisMonth: false,
          tasks: [],
          has_not_completed_task: false,
          has_completed_task: false,
        });
      }
    }

    last_date = array[array.length - 1].Date;
    if (array.length / 7 === 5) {
      for (let i = 1; i <= 7; ++i) {
        let date_i = new Date(last_date.getTime() + 1000 * 60 * 60 * 24 * i);
        array.push({
          Date: date_i,
          json: date_i.toJSON(),
          date: date_i.getDate(),
          month: date_i.getMonth() + 1,
          year: date_i.getFullYear(),
          isThisMonth: false,
          tasks: [],
          has_not_completed_task: false,
          has_completed_task: false,
        });
      }
    }

    return array;
  }

  static getNextDate(year, month, date) {
    const currentDate = new Date(`${year}-${month}-${date}`);
    const nextDate = new Date(currentDate.getTime() + 1000 * 60 * 60 * 24 * 1);
    return nextDate;
  }

  static getPrevDate(year, month, date) {
    const currentDate = new Date(`${year}-${month}-${date}`);
    const prevDate = new Date(currentDate.getTime() - 1000 * 60 * 60 * 24 * 1);
    return prevDate;
  }

  static getNextMonth(year, month) {
    year = Number(year);
    month = Number(month);
    return month === 12
      ? new Date(`${year + 1}-1`)
      : new Date(`${year}-${month + 1}`);
  }

  static getPrevMonth(year, month) {
    year = Number(year);
    month = Number(month);
    return month === 1
      ? new Date(`${year - 1}-12`)
      : new Date(`${year}-${month - 1}`);
  }

  static convertDateToUTC(date) {
    return new Date(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds()
    );
  }

  static toStringTime(d = new Date()) {
    if (d.toString() === 'Invalid Date') {
      d = new Date();
    }

    let hours = d.getHours();
    hours = hours < 10 ? `0${hours}` : `${hours}`;

    let minutes = d.getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

    return `${hours}:${minutes}`;
  }

  static toStringDate(d = new Date()) {
    if (d.toString() === 'Invalid Date') {
      d = new Date();
    }

    const year = d.getFullYear();

    let month = d.getMonth() + 1;
    month = month < 10 ? `0${month}` : `${month}`;

    let date = d.getDate();
    date = date < 10 ? `0${date}` : `${date}`;

    return `${year}-${month}-${date}`;
  }

  static setDate(stringDate, stringTime) {
    let d = new Date(`${stringDate} ${stringTime}`);
    if (d.toString() === 'Invalid Date') {
      d = new Date();
    }
    return d;
  }

  static toJson(date, time) {
    const d = new Date(`${date} ${time}`);
    return d.toJSON();
  }
}
