import { fetchBcgImg } from './changeBcg';
import { keys } from './keys';
import { addRemoveFavoritCity } from './addRemoveFavoritCitys';
import { geoLocationByCoords } from './fetch/fetchLocationByCoords';
import { renderFavoritBtn } from './render js/renderFavoritBtn';
import { fetchWeatherToday } from './fetch/fetchWeatherToday';
// import { fetchWeatherFiveDays } from './fetch/fetchWeatherFiveDays';
// import { renderWeatherNowContent } from './render js/renderWeatherNowContent';

const { targetCityKey, favoritCityKey } = keys;
const form = document.querySelector('.search-form');
const favoritCityBtn = document.querySelector('.favorit__city');
const input = document.querySelector('.search-input');

//
//
//
// норм так?
const geoInit = () => {
  navigator.geolocation.getCurrentPosition(async ({ coords }) => {
    const { latitude, longitude } = coords;

    const resolt = await geoLocationByCoords(latitude, longitude);
    if (input) {
      input.value = resolt;
    }
    fetchBcgImg(resolt);
    fetchWeatherToday(resolt);
    // fetchWeatherFiveDays(resolt);

    localStorage.setItem(targetCityKey, resolt);
  });
};
function initPage() {
  const favoritCity = localStorage.getItem(favoritCityKey);
  const parsedFavoritCity = JSON.parse(favoritCity);
  const targetCity = localStorage.getItem(targetCityKey);
  if (favoritCity) {
    renderFavoritBtn(parsedFavoritCity);
  }

  if (targetCity) {
    fetchBcgImg(targetCity);
    fetchWeatherToday(targetCity);
    // fetchWeatherFiveDays(targetCity);
    return;
  }
  geoInit();
}
initPage();
//
//
//
const onSubmit = event => {
  event.preventDefault();
  const { value } = event.target.query;
  const normolizedValue = value.trim();

  localStorage.setItem(targetCityKey, normolizedValue);

  fetchBcgImg(normolizedValue);
  fetchWeatherToday(normolizedValue);
  // fetchWeatherFiveDays(normolizedValue);
};
const onClickForm = event => {
  if (input.value !== '' && event.target.className === 'favorite-btn') {
    // нужно добавить проверку существует ли такой город
    const { value } = input;
    const normolizedValue = value
      .trim()
      .replace(value[0], value[0].toUpperCase());

    addRemoveFavoritCity(normolizedValue);
  }
  if (event.target.className === 'geo__city-btn') {
    geoInit();
  }
};

const onFavoritBtnClick = event => {
  if (event.target.className === 'delete-city') {
    addRemoveFavoritCity(event.target.id);
  }
  if (event.target.className === 'button favorit__city-btn') {
    const cityName = event.target.textContent;
    localStorage.setItem(targetCityKey, cityName);
    input.value = cityName;
    fetchBcgImg(cityName);
    fetchWeatherToday(cityName);
    // fetchWeatherFiveDays(cityName);
  }
};
if (favoritCityBtn) {
  favoritCityBtn.addEventListener('click', onFavoritBtnClick);
}
if (form) {
  form.addEventListener('submit', onSubmit);
  form.addEventListener('click', onClickForm);
}
