export default class calendar {
  /**
   * Функция получения статусов календаря
   *
   * @returns
   * ```
   * [
   *  {
   *    "date": "2022-07-03T00:00:00Z",
   *    "completed": true,
   *    "not_completed": true
   *  }
   * ]
   * ```
   */
  static async read() {
    try {
      const url = `${process.env.REACT_APP_api_server}/api/v1/task/statuses`;

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
