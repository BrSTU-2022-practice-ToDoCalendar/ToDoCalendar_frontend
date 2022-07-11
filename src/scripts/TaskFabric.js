import toastr from 'toastr';

export default class TaskFabric {
  /**
   * Функция отправляет POST на создание таски
   * @param {*} object
   * ```
   * {
   *   "title": "string",
   *   "description": "string",
   *   "start_date": "2022-07-11T15:00:50.488Z",
   *   "end_date": "2022-07-11T15:01:50.488Z",
   *   "completed": false
   * }
   * ```
   * @returns {boolean}
   * - true - таска создалась
   * - false - таска не создалась
   */
  static async create(object = {}) {
    try {
      const url = `${process.env.REACT_APP__URL_BACKEND_SERVER}/api/v1/tasks/`;

      const body = {
        ...object,
      };

      const access_token = localStorage.getItem('access');

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify(body),
      });

      const status = response.status;
      if (status === 201) {
        toastr.success('Таска создана успешно', 'POST /tasks/ (TaskFabric.js)');
        return true;
      }

      toastr.error('Таска не создана', 'POST /tasks/ (TaskFabric.js)');
      return false;
    } catch (error) {
      toastr.error('' + error, 'POST /tasks/ (TaskFabric.js)');
    }
  }

  static async read(params = {}) {
    try {
      const url =
        `${process.env.REACT_APP__URL_BACKEND_SERVER}/api/v1/tasks?` +
        new URLSearchParams(params);

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

      if (status === 200) {
        toastr.info(
          `Получили ${data.length} тасок/таски`,
          'GET tasks (TaskFabric.js)',
          {
            timeOut: 100,
          }
        );
        return data;
      }

      toastr.error(JSON.stringify(data, null, 2), 'GET tasks (TaskFabric.js)');
      return [];
    } catch (error) {
      toastr.error('' + error, 'GET tasks (TaskFabric.js)');
      return [];
    }
  }

  /**
   *
   * @param {Number} task_id - ид таски (не обязательно)
   * @returns {object}
   * Если передавали task_id, во функция возвращает:
   * ```
   * {
   *   "title": "string",
   *   "description": "string",
   *   "start_date": "2022-07-11T15:00:50.488Z",
   *   "end_date": "2022-07-11T15:01:50.488Z",
   *   "completed": false
   * }
   * ```
   * Если не передавали task_id, во функция возвращает:
   * ```
   * [
   *    {
   *      "title": "string",
   *      "description": "string",
   *      "start_date": "2022-07-11T15:00:50.488Z",
   *      "end_date": "2022-07-11T15:01:50.488Z",
   *      "completed": false
   *    },
   *    {
   *      "title": "string",
   *      "description": "string",
   *      "start_date": "2022-07-11T15:00:50.488Z",
   *      "end_date": "2022-07-11T15:01:50.488Z",
   *      "completed": false
   *    }
   * ]
   * ```
   */
  static async getTaskById(task_id) {
    if (task_id) {
      // Если это эполучение по id
      try {
        const url = `${process.env.REACT_APP__URL_BACKEND_SERVER}/api/v1/tasks/${task_id}/`;

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
        if (status === 200) {
          toastr.success('Получили таску', 'GET /tasks/id/ (TaskFabric.js)');
          return data;
        }

        toastr.error('Не получили таску', 'GET /tasks/id/ (TaskFabric.js)');
        return {};
      } catch (error) {
        toastr.error('' + error, 'GET /tasks/id/ (TaskFabric.js)');
      }
    }
  }

  /**
   *
   * @param {Number} id
   * @param {object} object
   * @returns {boolean}
   */
  static async update(id = 0, object = {}) {
    try {
      const url = `${process.env.REACT_APP__URL_BACKEND_SERVER}/api/v1/tasks/${id}/`;

      const body = {
        ...object,
      };

      const access_token = localStorage.getItem('access');

      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify(body),
      });

      const status = response.status;

      if (status !== 200) {
        alert('Task not updated');
        return false;
      }

      return true;
    } catch (err) {
      alert('' + err);
    }
  }

  /**
   * Функция удаляет дасту по task_id
   * @param {Number} task_id
   * @returns {boolean}
   * - true - таска удалилась
   * - false - таска не удалилась
   */
  static async remove(task_id = 1) {
    try {
      const url = `${process.env.REACT_APP__URL_BACKEND_SERVER}/api/v1/tasks/${task_id}/`;

      const access_token = localStorage.getItem('access');

      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      });

      const status = response.status;
      if (status === 204) {
        toastr.success(
          'Таска удалена успешно',
          'DELETE /tasks/ (TaskFabric.js)'
        );
        return true;
      }

      toastr.error('Таска не удалена', 'DELETE /tasks/ (TaskFabric.js)');
      return false;
    } catch (error) {
      toastr.error('' + error, 'DELETE /tasks/ (TaskFabric.js)');
    }
  }
}
