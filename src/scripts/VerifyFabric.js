import toastr from 'toastr';

/**
 * Класс содержит методы
 * - verifyToken(token) - проверить токен
 * - verifyRefresh() - проверить refresh токен
 * - verifyAccess() - проверить access токен
 * - verifyTokens() - проверить два токена
 * - updateAccessToken() - обновить access токен
 */
export default class VerifyFabric {
  /**
   * Функция отправляет в POST token (access или refresh)
   *
   * @param {string} token
   * @returns boolean
   * - true - авторизирован токен
   * - false - не авторизирован токен
   */
  static async verifyToken(token = '') {
    try {
      const url = `${process.env.REACT_APP__URL_BACKEND_SERVER}/api/v1/verify-token/`;

      const body = {
        token: token,
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const status = response.status;

      if (status === 200) {
        // toastr.success('Токен верифицирован', 'Верификация (VerifyFabric.js)');
        return true;
      }

      // toastr.error('Токен не верифицирован', 'Верификация (VerifyFabric.js)');
      return false;
    } catch (error) {
      toastr.error('' + error, 'Верификация (VerifyFabric.js)');
    }
  }

  /**
   * Функция, которая проверяет авторизован ли resresh токен
   * @param {*} refresh_token
   * @returns boolean
   * - true - авторизован refresh токен
   * - false - не авторизован refresh токен (выходим из аккакунта)
   */
  static async verifyRefresh(refresh_token = localStorage.getItem('refresh')) {
    if (refresh_token == null) {
      localStorage.removeItem('access');
      toastr.error('Нет refresh токена', 'Верификация (VerifyFabric.js)');
      return false;
    }

    const is_verify_refresh_token = await VerifyFabric.verifyToken(
      refresh_token
    );

    if (is_verify_refresh_token) {
      localStorage.setItem('refresh', refresh_token);
      toastr.info(
        'refresh токен авторизован',
        'Верификация (VerifyFabric.js)',
        { timeOut: 100 }
      );
      return true;
    }

    localStorage.removeItem('refresh');
    localStorage.removeItem('access');
    toastr.error(
      'refresh токен не авторизован',
      'Верификация (VerifyFabric.js)'
    );
    return false;
  }

  /**
   * Функция, которая проверяет авторизован ли access токен
   * @param {*} access_token
   * @returns boolean
   * - true - авторизован access токен
   * - false - просрочен access токен, и он же не обновляется с помощью refresh токена
   */
  static async verifyAccess(access_token = localStorage.getItem('access')) {
    let is_verify_access_token = await VerifyFabric.verifyToken(access_token);
    if (is_verify_access_token) {
      localStorage.setItem('access', access_token);
      toastr.info('access токен автозован', 'Верификация (VerifyFabric.js)', {
        timeOut: 100,
      });
      return true;
    }

    const isUpdated = await VerifyFabric.updateAccessToken(); // Продлеваем access токен
    if (isUpdated) {
      toastr.info(
        'access токен обновлён на новый',
        'Верификация (VerifyFabric.js)',
        {
          timeOut: 100,
        }
      );
      return true;
    }

    localStorage.removeItem('access');
    toastr.info(
      'access токен не авторизован',
      'Верификация (VerifyFabric.js)',
      {
        timeOut: 100,
      }
    );
    return false;
  }

  /**
   * Функция, которая проверяет два токена
   *
   * ЭТУ ФУНКЦИЮ ИСПОЛЬЗОВАТЬ В REACT КОМПОНЕНТАХ
   *
   * @returns boolean
   * - true - авторизованы токены (из аккаунта не выходим)
   * - false - не авторизован(-ы) токен(-ы)
   */
  static async verifyTokens() {
    const is_verify_access_token = await VerifyFabric.verifyAccess();
    const is_verify_refresh_token = await VerifyFabric.verifyRefresh();

    if (is_verify_access_token && is_verify_refresh_token) {
      return true;
    }

    return false;
  }

  /**
   * Функция, которая обновляет access токен имея refresh токен
   * @returns
   */
  static async updateAccessToken() {
    try {
      let refresh_token = localStorage.getItem('refresh');
      let access_token = localStorage.getItem('access');

      const url = `${process.env.REACT_APP__URL_BACKEND_SERVER}/api/v1/refresh-token/`;

      const body = {
        refresh: refresh_token,
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const status = response.status;
      const data = await response.json();

      if (status !== 200) {
        return false;
      }

      access_token = data.access;
      localStorage.setItem('access', access_token);

      return true;
    } catch (error) {
      toastr.error('' + error, 'Верификация (VerifyFabric.js)');
    }
  }
}
