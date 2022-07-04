export default class Task {
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

      if (status !== 201) {
        alert('Task not created');
        return false;
      }

      return true;
    } catch (err) {
      alert('' + err);
    }
  }

  static async read(task_id) {
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

        if (status !== 200) {
          return {};
        }

        return data;
      } catch (err) {
        alert('' + err);
      }
    } else {
      // если это получение всех тасков
      try {
        const url = `${process.env.REACT_APP__URL_BACKEND_SERVER}/api/v1/tasks/`;

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

      if (status !== 204) {
        return false;
      }

      return true;
    } catch (err) {
      alert('' + err);
    }
  }
}
