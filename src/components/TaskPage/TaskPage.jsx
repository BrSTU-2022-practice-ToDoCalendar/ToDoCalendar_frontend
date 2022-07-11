import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import TaskFrame from '../Headers/TaskFrame';
import Container from '../Container/Container';
import DateFabric from '../../scripts/DateFabric';
import TaskFabric from '../../scripts/TaskFabric';
import styles from './TaskPage.module.css';

const standart_task = {
  title: '_',
  isCompleted: false,
  description: '',
  startDate: DateFabric.toStringDate(),
  startTime: DateFabric.toStringTime(),
  endDate: DateFabric.toStringDate(),
  endTime: DateFabric.toStringTime(
    new Date(new Date().getTime() + 1000 * 60 * 1)
  ),
};

export default function TaskPage() {
  const { taskId } = useParams();

  const [title, setTitle] = useState(standart_task.title);
  const [isCompleted, setIsCompleted] = useState(standart_task.isCompleted);
  const [description, setDescription] = useState(standart_task.description);
  const [startDate, setStartDate] = useState(standart_task.startDate);
  const [startTime, setStartTime] = useState(standart_task.startTime);
  const [endDate, setEndDate] = useState(standart_task.endDate);
  const [endTime, setEndTime] = useState(standart_task.endTime);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let navigate = useNavigate();

  useEffect(() => {
    async function fetchTask() {
      const object = await TaskFabric.getTaskById(taskId);
      setTitle(object.title);
      setDescription(object.description);
      setIsCompleted(object.completed);

      const start_date = new Date(object.start_date);
      setStartDate(DateFabric.toStringDate(start_date));
      setStartTime(DateFabric.toStringTime(start_date));

      const end_date = new Date(object.end_date);
      setEndDate(DateFabric.toStringDate(end_date));
      setEndTime(DateFabric.toStringTime(end_date));
    }

    if (taskId) {
      fetchTask();
      return;
    }

    setTitle(standart_task.title);
    setIsCompleted(standart_task.isCompleted);
    setDescription(standart_task.description);
    setStartDate(standart_task.startDate);
    setStartTime(standart_task.startTime);
    setEndDate(standart_task.endDate);
    setEndTime(standart_task.endTime);
  }, [taskId]);

  function changed_dates(left_date = new Date(), right_date = new Date()) {
    if (left_date.getTime() >= right_date.getTime()) {
      right_date = new Date(left_date.getTime() + 1000 * 60 * 1);
    }
    return { left_date, right_date };
  }

  function changed_start_date(value) {
    let { left_date, right_date } = changed_dates(
      DateFabric.setDate(value, startTime),
      DateFabric.setDate(endDate, endTime)
    );
    setStartDate(DateFabric.toStringDate(left_date));
    setEndDate(DateFabric.toStringDate(right_date));
  }

  function changed_end_date(value) {
    let { left_date, right_date } = changed_dates(
      DateFabric.setDate(startDate, startTime),
      DateFabric.setDate(value, endTime)
    );
    setStartDate(DateFabric.toStringDate(left_date));
    setEndDate(DateFabric.toStringDate(right_date));
  }

  function changed_start_time(value) {
    let { left_date, right_date } = changed_dates(
      DateFabric.setDate(startDate, value),
      DateFabric.setDate(endDate, endTime)
    );
    setStartTime(DateFabric.toStringTime(left_date));
    setEndTime(DateFabric.toStringTime(right_date));
  }

  function changed_end_time(value) {
    let { left_date, right_date } = changed_dates(
      DateFabric.setDate(startDate, startTime),
      DateFabric.setDate(endDate, value)
    );
    setStartTime(DateFabric.toStringTime(left_date));
    setEndTime(DateFabric.toStringTime(right_date));
  }

  function navigate_to_home() {
    const d = new Date(startDate);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate();
    navigate(`/${year}/${month}/${date}`);
  }

  async function save(data) {
    await TaskFabric.create({
      title,
      description,
      start_date: DateFabric.toJson(startDate, startTime),
      end_date: DateFabric.toJson(endDate, endTime),
      completed: isCompleted,
    });
    navigate_to_home();
  }

  async function update(data) {
    await TaskFabric.update(taskId, {
      title,
      description,
      start_date: DateFabric.toJson(startDate, startTime),
      end_date: DateFabric.toJson(endDate, endTime),
      completed: isCompleted,
    });
    navigate_to_home();
  }

  async function remove(data) {
    await TaskFabric.remove(taskId);
    navigate_to_home();
  }

  return (
    <TaskFrame>
      <form className={styles.form}>
        <Container>
          <div className={styles.buttons_block}>
            {taskId ? (
              <>
                <button onClick={handleSubmit(update)}>Обновить таску</button>
                <button onClick={handleSubmit(remove)}>Удалить таску</button>
              </>
            ) : (
              <button onClick={handleSubmit(save)}>Создать новую таску</button>
            )}
          </div>
          <div className={styles.title_block}>
            <input
              {...register('title', {
                required: 'Поле title не может быть пустым',
                pattern: {
                  value: /^[\S]+.*$/,
                  message: 'Поле title не может начинаться с пробела',
                },
              })}
              value={title}
              onInput={(event) => setTitle(event.target.value)}
              placeholder={'Task name'}
            />
            {errors.title?.message ? (
              <span className={styles.error_message}>
                {errors.title.message}
              </span>
            ) : (
              ''
            )}
          </div>
          <div className={styles.date_block}>
            <input
              {...register('startDate', {
                required: 'Поле startDate не может быть пустым',
              })}
              type="date"
              value={startDate}
              onChange={(event) => changed_start_date(event.target.value)}
            />
            <input
              {...register('startTime', {
                required: 'Поле startTime не может быть пустым',
              })}
              type="time"
              value={startTime}
              onChange={(event) => changed_start_time(event.target.value)}
            />
            {' - '}
            <input
              {...register('endDate', {
                required: 'Поле endDate не может быть пустым',
              })}
              type="date"
              value={endDate}
              onChange={(event) => changed_end_date(event.target.value)}
            />
            <input
              {...register('endTime', {
                required: 'Поле endTime не может быть пустым',
              })}
              type="time"
              value={endTime}
              onChange={(event) => changed_end_time(event.target.value)}
            />
          </div>
          <div className={styles.check_block}>
            <label
              htmlFor="completed"
              checked={isCompleted}
              className={isCompleted ? styles.checked : ''}
            ></label>
            <input
              type="checkbox"
              name="completed"
              id="completed"
              checked={isCompleted}
              onChange={(event) => setIsCompleted(!isCompleted)}
            />
            {isCompleted ? 'Task completed' : 'Task not completed'}
          </div>
        </Container>
        <div className={styles.description_block}>
          <Container>
            <textarea
              value={description}
              name="description"
              onInput={(event) => setDescription(event.target.value)}
              placeholder={'Task description'}
            />
          </Container>
        </div>
      </form>
    </TaskFrame>
  );
}
