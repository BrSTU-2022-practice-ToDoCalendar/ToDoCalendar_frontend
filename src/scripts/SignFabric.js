import toastr from 'toastr';

import VerifyFabric from './VerifyFabric';

/**
 * Класс содержит методы
 * - login() - для проверки входа
 * - singup() - для проверки регистрации
 */
export default class SignFabric {
  /**
   * Функция отправляет в POST имя пользователя и пароль. Ответ сервера:
   * 200 - ввошел (записываем refresh в LocalStorage)
   * 401 - ошибка входа
   *
   * @param {string} username - имя пользователя
   * @param {string} password - пароль
   * @returns {boolean}
   * - true - успешный вход
   * - false - не ввошли в аккаунт
   */
  static async login(username = '', password = '') {
    try {
      const url = `${process.env.REACT_APP__URL_BACKEND_SERVER}/api/v1/login/`;

      const body = {
        username: username,
        password: password,
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

      if (status === 200) {
        const refresh_token = '' + data.refresh;
        const access_token = '' + data.access;

        localStorage.setItem('refresh', refresh_token);
        localStorage.setItem('access', access_token);

        const isVerify = await VerifyFabric.verifyTokens();
        if (isVerify) {
          toastr.success('Успешная авторизация', 'Вход (SignInFabric.js)');
          return true;
        }

        toastr.error('Авторизация не прошла успешно', 'Вход (SignInFabric.js)');
        return false;
      }

      toastr.error(JSON.stringify(data, null, 2), 'Вход (SignInFabric.js)');
      return false;
    } catch (error) {
      toastr.error('' + error, 'Вход (SignInFabric.js)');
      return false;
    }
  }

  /**
   * Функция, которая отправляет POST для регистрации пользователя
   * @param {*} email
   * @param {*} username
   * @param {*} password
   *
   * @returns {boolean}
   * - true - успешная регистрация
   * - false - не зарегестрировались
   */
  static async signup(email, username, password) {
    const URL = `${process.env.REACT_APP__URL_BACKEND_SERVER}/api/v1/register/`;
    const body = {
      email,
      username,
      password,
    };
    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const status = response.status;
      if (status === 201) {
        toastr.success('Успешная регистрация', 'Регистрация (SignUpFabric.js)');
        return true;
      }

      const data = await response.json();
      toastr.error(JSON.stringify(data), 'Регистрация (SignUpFabric.js)');
      return false;
    } catch (error) {
      toastr.error('' + error, 'Регистрация (SignUpFabric.js)');
      return false;
    }
  }

  static logout() {
    localStorage.removeItem('refresh');
    localStorage.removeItem('access');
    // navigate('/'); в коде
  }
}
