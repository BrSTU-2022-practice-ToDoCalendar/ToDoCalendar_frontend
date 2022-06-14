import styles from './Calendar.module.css';

function Calendar(props) {
  function getObjectDate(string_date) {
    let object_date = new Date(string_date);
    if (object_date.toString() === 'Invalid Date') {
      return new Date();
    }
    return object_date;
  }

  function getSelectedClass(flag) {
    if (flag) {
      return styles.calendar_section__day_block_selected;
    }
    return '';
  }

  function getWeekendClass(date_object) {
    let day = date_object.getDay();
    if (day === 5 || day === 6) {
      return styles.calendar_section__day_block_weekend;
    }
    return '';
  }

  function getDay(date_object) {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return days[date_object.getDay()];
  }

  function getDate(date_object) {
    return date_object.getDate();
  }

  return (
    <section className={styles.calendar_section}>
      <ul>
        {props.calendarDays.map((element, index) => {
          const date_object = getObjectDate(element.string_data);
          return (
            <li key={index}>
              <div
                className={[
                  styles.calendar_section__day_block, //Bacis day component
                  getSelectedClass(element.selected), //Selected day
                  getWeekendClass(date_object), //Weekend day
                ].join(' ')}
              >
                <div>{getDay(date_object)}</div>
                <div>{getDate(date_object)}</div>
              </div>
              <div className={styles.calendar_section__circles}>
                {element.hasCompletedTask === true ? (
                  <span
                    className={styles.calendar_section__task_completed_circle}
                  ></span>
                ) : (
                  <></>
                )}
                {element.hasTask === true ? (
                  <span className={styles.calendar_section__task_circle}></span>
                ) : (
                  <></>
                )}
                {element.hasCurrentTask === true ? (
                  <span
                    className={styles.calendar_section__task_current_circle}
                  ></span>
                ) : (
                  <></>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Calendar;
