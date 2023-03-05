import { currentDate } from './getCurrentDate';
import { createWeatherNowContent } from './render js/createWeatherNowContent';
import { renderFiveDaysItem } from './render js/rendeerFiveDaysItem';
const weatherNowContent = document.querySelector('.weather-contetn');
const fiveDaysContainer = document.querySelector('.fiveDays__weather');
function getCurrentURL() {
  return window.location.pathname;
}
const currentPage = getCurrentURL();

export const renderHomePage = data => {
  if (currentPage === '/index.html') {
    weatherNowContent.innerHTML = createWeatherNowContent(data);

    currentDate();
  }
};
export const createFiveDays = data => {
  const allDaysArr = data.list;
  const oneDayArr = data.list.map(element => element.dt_txt.slice(0, 10)); // получаем массив с датами

  const dataUnique = oneDayArr.filter(
    (elm, index, arr) => arr.indexOf(elm) === index
  ); // получаем массив с 5 уникальными датами
  if (dataUnique.length > 5) {
    dataUnique.shift();
  }
  const fiveDays = dataUnique.map(data =>
    allDaysArr.filter(obj => obj.dt_txt.slice(0, 10) === data)
  );
  console.log(fiveDays);
  if (currentPage === '/fiveDays.html') {
    renderFiveDaysItem(data.list);
  }
};
