/**
 * Функция отправляет в POST имя пользователя и пароль. Ответ сервера:
 * 200 - ввошел (записываем refresh в LocalStorage)
 * 401 - ошибка входа
 *
 * @param {string} username - имя пользователя
 * @param {string} password - пароль
 * @returns
 */
export default async function login(username = '', password = '') {
  try {
    const url = `${process.env.REACT_APP_api_server}/api/v1/login/`;

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

    if (status === 401) {
      alert(JSON.stringify(data, null, 2));
      return;
    }

    if (status === 200) {
      const refresh = data.refresh;

      // TODO добавить куда-то access токен
      // const access = data.access;

      localStorage.setItem('refresh', '' + refresh);

      alert(JSON.stringify(data, null, 2));
      return;
    }
  } catch (err) {
    alert('' + err);
  }
}
