import { currentDate } from './getCurrentDate';
import { createWeatherNowContent } from './render js/createWeatherNowContent';
const weatherNowContent = document.querySelector('.weather-contetn');
const heroSection = document.querySelector('.hero__section ');

export const renderHomePage = data => {
  weatherNowContent.innerHTML = createWeatherNowContent(data);
  console.log('asdf');
};
if (heroSection) {
  currentDate();
}
