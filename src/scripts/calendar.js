import TaskFabric from './task';
import DateFabric from './date';

export default class calendar {
  static async read() {
    try {
      const tasks = await TaskFabric.read();
      console.log(tasks);
      tasks.forEach((element) => {
        element.string_date = DateFabric.getDateString(
          new Date(element.start_date)
        );
      });
      console.log(tasks);

      // Добавляем таски во множество по датам
      const set_dates = new Set();
      tasks.forEach((element) => {
        const start_date = element.start_date;
        const date_str = DateFabric.getDateString(new Date(start_date));
        set_dates.add(date_str);
      });
      const set_dates_array = Array.from(set_dates);

      // Находим во множестве минимальный элемент
      console.log(set_dates);

      // Минимальная строковая дата
      let min_str_date = DateFabric.getDateString();
      console.log(min_str_date);

      // Прохожусь по массиву и ищу минимальную строковую дату
      set_dates.forEach((str_date) => {
        const first_date = new Date(min_str_date);
        const second_date = new Date(str_date);
        if (DateFabric.isFirstDateMoreSecondDate(first_date, second_date)) {
          min_str_date = str_date;
        }
      });
      console.log(min_str_date);

      const date_now = new Date(); // дата сейчас
      const str_date_now = DateFabric.getDateString(date_now);
      const last_date = date_now.getTime() + 1000 * 60 * 60 * 24 * 8; // плюс 8 дат от сегодняшней даты
      const last_str_date = DateFabric.getDateString(new Date(last_date));

      console.log('==========');
      console.log(min_str_date);
      console.log(last_str_date);

      // Узнаю разницу между минимальным днем и последним днем в календаре
      const dates_different = DateFabric.differentDates(
        new Date(min_str_date),
        new Date(last_str_date)
      );
      console.log(dates_different);

      const min_date = new Date(min_str_date);
      const array_dates = [];
      for (let i = 0; i < dates_different; ++i) {
        const js_time = min_date.getTime() + 1000 * 60 * 60 * 24 * i;
        const js_date = new Date(js_time);
        const string_data = DateFabric.getDateString(js_date);
        const str_day = DateFabric.getDay(js_date);
        const str_date = js_date.getDate();
        const is_weekend = DateFabric.isWeekend(js_date);

        let selected = false;
        let counter_tasks = 0;
        let counter_current_tasks = 0;
        let counter_completed_tasks = 0;

        let tasks_list = [];

        if (string_data === str_date_now) {
          selected = true;
          counter_current_tasks += 1;
        }

        // console.log(set_dates);

        for (let j = 0; j < tasks.length; ++j) {
          if (string_data === tasks[j].string_date) {
            tasks_list.push(tasks[j]);

            counter_tasks += 1;

            if (tasks[j].completed === true) {
              counter_completed_tasks += 1;
            }
          }
        }

        array_dates.push({
          tasks_list,
          string_data,
          selected,
          counter_tasks,
          counter_current_tasks,
          counter_completed_tasks,
        });
      }
      console.log(array_dates);
      return array_dates;
    } catch (err) {
      alert('' + err);
    }
  }
}
