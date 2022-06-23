/**
 * Функция отправляет в POST token
 * (может быть и access токен, может быть refresh токен)
 *
 * Функция возвращает:
 * true - авторизирован токен
 * false - не авторизирован токен
 *
 * @param {string} token
 * @returns
 */
export default async function verify(token = '') {
  const url = `${process.env.REACT_APP_api_server}/api/v1/login/verify/`;

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

  if (status !== 200) {
    alert('Не авторизован');
    localStorage.removeItem('refresh');
    return false;
  }

  const data = await response.json();

  console.log({
    title: 'verify.js',
    fetch_url: url,
    fetch_body: body,
    fetch_response: response,
    fetch_json_response: data,
    token: token,
  });

  return true;
}
