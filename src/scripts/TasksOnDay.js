export default class TaskOnDay {
  /**
   * Функция получения тасков на определенную дату
   * @param {*} year
   * @param {*} month
   * @param {*} day
   * @returns
   * ```
   * [
   *  {
   *    "id": 2,
   *    "title": "Матеша",
   *    "description": "",
   *    "start_date": "2022-07-04T15:25:00Z",
   *    "end_date": "2022-07-04T15:30:00Z",
   *    "completed": true,
   *    "user": 2
   *  }
   * ]
   * ```
   */
  static async read(year, month, day) {
    try {
      const url =
        `${process.env.REACT_APP__URL_BACKEND_SERVER}/api/v1/tasks?` +
        new URLSearchParams({ year, month, day });

      const access_token = localStorage.getItem('access');

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      });

      const status = response.status;
      const data = await response.json();

      if (status !== 200) {
        return [];
      }

      return data;
    } catch (err) {
      alert('' + err);
    }
  }
}
