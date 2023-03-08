import { currentDate } from './getCurrentDate';
import { createWeatherNowContent } from './render js/createWeatherNowContent';
import { renderFiveDaysItem } from './render js/rendeerFiveDaysItem';

const weatherNowContent = document.querySelector('.weather-contetn');
const fiveDaysCountryTitle = document.querySelector('.fiveDays__country-title');
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
  if (currentPage === '/fiveDays.html') {
    renderFiveDaysItem(data.weatherFiveDays);
    fiveDaysCountryTitle.innerHTML = `${data.city},<span>${data.country}</span>`;
  }
};
