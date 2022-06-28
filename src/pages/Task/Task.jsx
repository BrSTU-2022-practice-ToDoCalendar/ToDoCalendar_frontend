import { useEffect } from 'react';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';

import TaskFabric from '../../scripts/task';

import styles from './Task.module.css';

function Task() {
  const { task_id } = useParams();
  let navigate = useNavigate();

  const [startDate, setStartDate] = useState(getDateNow());
  const [endDate, setEndDate] = useState(getDateNow());

  const [startTime, setStartTime] = useState(getTimeNow());
  const [endTime, setEndTime] = useState(getTimeNow(true));

  const [title, setTitle] = useState('Task name');
  const [description, setDescription] = useState('');

  const [isEdit, setIsEdit] = useState(task_id ? false : true);

  useEffect(() => {
    (function () {
      if (task_id) get_task();
    })();
  }, []);

  async function get_task() {
    const task_object = await TaskFabric.read(task_id);

    if (Object.keys(task_object).length === 0)
      navigate(`/task/${task_id}/error404`, { replace: true });

    setTitle(task_object.title);
    setDescription(task_object.description);

    setStartDate(getDate(new Date(task_object.start_date)));
    setStartTime(getTime(new Date(task_object.start_date)));

    setEndDate(getDate(new Date(task_object.end_date)));
    setEndTime(getTime(new Date(task_object.end_date)));
  }

  async function create_task() {
    const start_date_instance = new Date(`${startDate} ${startTime}`);
    const start_date = start_date_instance.toJSON();

    const end_date_instance = new Date(`${endDate} ${endTime}`);
    const end_date = end_date_instance.toJSON();

    const isCreated = await TaskFabric.create({
      title,
      description,
      start_date,
      end_date,
    });

    if (isCreated) {
      navigate(`/`, { replace: true });
    }
  }

  function complete_task() {
    alert('Заглушка выполненого таска');
  }

  async function delete_task() {
    const isDeleted = await TaskFabric.delet(task_id);
    if (isDeleted) {
      navigate(`/`, { replace: true });
    } else {
      alert('Task not deleted');
    }
  }

  function edit_or_view() {
    setIsEdit(!isEdit);
  }

  return (
    <Container>
      <Header title="Task" />
      <section className={styles.date_section}>
        {isEdit ? (
          <>
            Task start
            <input
              type="date"
              name="trip-start"
              value={startDate}
              onInput={(event) => setStartDate(event.target.value)}
            />
            <input
              type="time"
              value={startTime}
              onInput={(event) => setStartTime(event.target.value)}
            />
          </>
        ) : (
          <p>
            Task start: {startDate}, {startTime}
          </p>
        )}
      </section>
      <section className={styles.date_section}>
        {isEdit ? (
          <>
            Task end
            <input
              type="date"
              name="trip-start"
              value={endDate}
              onInput={(event) => setEndDate(event.target.value)}
            />
            <input
              type="time"
              value={endTime}
              max="24:00"
              onInput={(event) => {
                setEndTime(event.target.value);
                console.log(event.target.value);
              }}
            />
          </>
        ) : (
          <p>
            Task end: {endDate}, {endTime}
          </p>
        )}
      </section>
      <section className={styles.title_section}>
        {isEdit ? (
          <input
            type="text"
            value={title}
            onInput={(event) => setTitle(event.target.value)}
            placeholder={'Task name'}
          />
        ) : (
          <h2>{title}</h2>
        )}
      </section>
      <section className={styles.description_section}>
        {isEdit ? (
          <textarea
            value={description}
            onInput={(event) => setDescription(event.target.value)}
            placeholder={'Task description'}
          />
        ) : (
          <pre>{description}</pre>
        )}
      </section>
      <section className={styles.buttons_section}>
        {task_id ? (
          <button className={styles.delete_button} onClick={delete_task}>
            Delete
          </button>
        ) : (
          <></>
        )}

        <button
          className={styles.edit_button}
          onClick={edit_or_view}
          title={
            isEdit ? 'Выбрать режим просмотра' : 'Выбрать режим редактирования'
          }
        >
          {isEdit ? 'View task' : 'Edit task'}
        </button>
        {!task_id ? (
          <button className={styles.completed_button} onClick={create_task}>
            Create
          </button>
        ) : (
          <button className={styles.completed_button} onClick={complete_task}>
            Complete
          </button>
        )}
      </section>
    </Container>
  );
}

function getDateNow() {
  const d = new Date();
  return getDate(d);
}

function getDate(d = new Date()) {
  const year = d.getFullYear();

  let mounth = d.getMonth();
  mounth = mounth < 10 ? `0${mounth}` : `${mounth}`;

  let date = d.getMonth();
  date = date < 10 ? `0${date}` : `${date}`;

  const result = `${year}-${mounth}-${date}`;

  return result;
}

function getTimeNow(next) {
  let d = new Date();
  if (next) {
    d = new Date(d.getTime() + 5 * 60 * 1000);
  }

  return getTime(d);
}

function getTime(d = new Date()) {
  let hours = d.getHours();
  hours = hours < 10 ? `0${hours}` : `${hours}`;

  let minutes = d.getMinutes();
  minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

  const result = `${hours}:${minutes}`;
  return result;
}

export default Task;
