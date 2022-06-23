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

  console.log({
    title: 'login.js',
    fetch_url: url,
    fetch_body: body,
    fetch_response: response,
    fetch_json_response: data,
  });

  if (status === 401) {
    alert(JSON.stringify(data, null, 2));
    return;
  }

  if (status === 200) {
    const refresh = data.refresh;
    const access = data.access;

    localStorage.setItem('refresh', '' + refresh);

    console.log({
      title: 'login.js',
      fetch_url: url,
      fetch_body: body,
      fetch_response: response,
      fetch_json_response: data,
      refresh_token: refresh,
      access_token: access,
    });

    alert(JSON.stringify(data, null, 2));
    return;
  }
}
