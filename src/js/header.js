import { fetchBcgImg } from './changeBcg';
import { keys } from './keys';
import { addRemoveFavoritCity } from './addRemoveFavoritCitys';
import { geoLocationByCoords } from './fetchLocationByCoords';
import { renderFavoritBtn } from './render js/renderFavoritBtn';
import { fetchWeather } from './fetchWeather';

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
    input.value = resolt;
    fetchBcgImg(resolt);
    fetchWeather(resolt);

    localStorage.setItem(targetCityKey, resolt);
  });
};
function initPage() {
  const favoritCity = localStorage.getItem(favoritCityKey);
  const parsedFavoritCity = JSON.parse(favoritCity);
  const targetCity = localStorage.getItem(targetCityKey);
  geoInit();
  if (favoritCity) {
    renderFavoritBtn(parsedFavoritCity);
  }

  if (targetCity) {
    fetchBcgImg(targetCity);
    fetchWeather(targetCity);
  }
}
initPage();
//
//
//
const onSubmit = event => {
  event.preventDefault();
  const { value } = event.target.query;
  normolizedValue = value.trim();

  localStorage.setItem(targetCityKey, normolizedValue);

  fetchBcgImg(normolizedValue);
  fetchWeather(normolizedValue);
};
const onClickForm = event => {
  if (input.value !== '' && event.target.className === 'favorite-btn') {
    // нужно добавить проверку существует ли такой город
    const { value } = input;
    normolizedValue = value.trim().replace(value[0], value[0].toUpperCase());

    addRemoveFavoritCity(normolizedValue);
  }
  // if (event.target.className === 'geo__city-btn') {
  //   geoInit();
  // }
};

const onRemoveClick = event => {
  if (event.target.className === 'delete-city') {
    addRemoveFavoritCity(event.target.id);
  }
};
favoritCityBtn.addEventListener('click', onRemoveClick);

form.addEventListener('submit', onSubmit);
form.addEventListener('click', onClickForm);
