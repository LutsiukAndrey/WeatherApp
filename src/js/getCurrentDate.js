import { DateTime } from 'luxon';

export const currentDate = () => {
  const timer = document.querySelector('.timer');
  const timerItems = {
    timeDay: timer.querySelector('.day'),
    timeNameOfDay: timer.querySelector('.day-name'),
    timeMonth: timer.querySelector('.month-now'),
    timeHour: timer.querySelector('.hour'),
    timeMinute: timer.querySelector('.minute'),
    timeSeconds: timer.querySelector('.seconds'),
  };

  setInterval(function () {
    const date = DateTime.now();

    const month = { month: 'long' };
    const week = { weekday: 'short' };
    const { hour, minute, second, day } = date;

    const {
      timeDay,
      timeNameOfDay,
      timeMonth,
      timeHour,
      timeMinute,
      timeSeconds,
    } = timerItems;
    timeDay.textContent = day;
    timeMonth.textContent = date.setLocale('en-GB').toLocaleString(month);
    timeHour.textContent = hour;
    timeMinute.textContent = minute;
    timeSeconds.textContent = second;
    timeNameOfDay.textContent = date.setLocale('en-GB').toLocaleString(week);
  }, 1000);
};
