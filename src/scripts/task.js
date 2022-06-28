export default class Task {
  static async create(object = {}) {
    try {
      const url = `${process.env.REACT_APP_api_server}/api/v1/task/`;

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

      if (status !== 201) {
        alert('Task not created');
        return false;
      }

      return true;
    } catch (err) {
      alert('' + err);
    }
  }

  static async read(task_id = 1) {
    try {
      const url = `${process.env.REACT_APP_api_server}/api/v1/task/${task_id}/`;

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
        return {};
      }

      return data;
    } catch (err) {
      alert('' + err);
    }
  }

  static async delet(task_id = 1) {
    try {
      const url = `${process.env.REACT_APP_api_server}/api/v1/task/${task_id}/`;

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

      if (status !== 204) {
        return false;
      }

      return true;
    } catch (err) {
      alert('' + err);
    }
  }
}
