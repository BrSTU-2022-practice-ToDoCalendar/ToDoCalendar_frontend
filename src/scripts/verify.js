export default class Verify {
  static async refresh(refresh_token = localStorage.getItem('refresh')) {
    if (refresh_token == null) {
      localStorage.removeItem('access');
      return false;
    }

    const is_verify_refresh_token = await verify(refresh_token);

    if (is_verify_refresh_token) {
      localStorage.setItem('refresh', refresh_token);
      return true;
    }

    localStorage.removeItem('refresh');
    localStorage.removeItem('access');
    return false;
  }

  static async access(access_token = localStorage.getItem('access')) {
    if (access_token == null) {
      localStorage.removeItem('refresh');
      return false;
    }

    const is_verify_access_token = await verify(access_token);

    if (is_verify_access_token) {
      localStorage.setItem('access', access_token);
      return true;
    }

    // TODO написать продлить access токен refreshем, если не продлевается, то false

    localStorage.removeItem('access');
    return false;
  }

  static async allTokens() {
    const is_verify_access_token = await Verify.access();
    const is_verify_refresh_token = await Verify.refresh();

    if (is_verify_access_token && is_verify_refresh_token) {
      return true;
    }

    return false;
  }
}

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
async function verify(token = '') {
  try {
    const url = `${process.env.REACT_APP_api_server}/api/v1/verify-token/`;

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
      return false;
    }

    return true;
  } catch (err) {
    alert('' + err);
  }
}
