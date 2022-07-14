import sleep from '../sleep/sleep';
import ToastController from '../Toast/ToastController';

export default class TaskController {
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
      const body = { ...object };

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
        ToastController.info('Таска создана', 'TaskController.js POST');
        return true;
      }

      ToastController.warning('Таска не создана', 'TaskController.js POST');
      return false;
    } catch (error) {
      ToastController.error(error, 'TaskController.js POST');
      return false;
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
        ToastController.info(
          `Получили массив тасок (${data.length} шт.)`,
          'TaskController.js GET'
        );
        return data;
      }

      // Костыль, который через три секунды снова повторит запрос
      // Ибо может access токен просрочен и за это время хватит ему обновиться
      if (status === 401) {
        await sleep(3000);
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
          ToastController.info(
            `Получили массив тасок (${data.length} шт.)`,
            'TaskController.js GET'
          );
          return data;
        }
      }

      ToastController.warning(
        'Не получили массив тасок ' + JSON.stringify(data),
        'TaskController.js GET'
      );
      return [];
    } catch (error) {
      ToastController.error(error, 'TaskController.js GET');
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
          ToastController.info('Получили таску', 'TaskController.js GET');
          return data;
        }

        // Костыль, который через три секунды снова повторит запрос
        // Ибо может access токен просрочен и за это время хватит ему обновиться
        if (status === 401) {
          await sleep(3000);
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
            ToastController.info('Получили таску', 'TaskController.js GET');
            return data;
          }
        }

        ToastController.warning(
          'Не получили таску ' + JSON.stringify(data),
          'TaskController.js GET'
        );
        return {};
      } catch (error) {
        ToastController.error(error, 'TaskController.js GET');
        return {};
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
      const body = { ...object };

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
      if (status === 200) {
        ToastController.info('Таска обновлена', 'TaskController.js UPDATE');
        return true;
      }

      const data = await response.json();
      ToastController.warning(
        'Таска не обновлена ' + JSON.stringify(data),
        'TaskController.js UPDATE'
      );
      return false;
    } catch (error) {
      ToastController.error(error, 'TaskController.js UPDATE');
      return false;
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
        TaskController.info('Таска удалена', 'TaskController.js DELETE');
        return true;
      }

      const data = await response.json();
      ToastController.warning(
        'Таска не удалена ' + JSON.stringify(data),
        'TaskController.js DELETE'
      );
      return false;
    } catch (error) {
      ToastController.error(error, 'TaskController.js DELETE');
      return false;
    }
  }
}
