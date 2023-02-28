import { fetchBcgImg } from './changeBcg';
import { keys } from './keys';
import { addFavoritCity } from './favoritCitys';
import { geoLocationByCoords } from './getLocationByCoords';

const { targetCityKey, targetGeoCity } = keys;

let inputValue = '';

const onSubmit = event => {
  event.preventDefault();
  const { value } = event.target.query;
  localStorage.setItem(targetCityKey, value.toLowerCase());
  fetchBcgImg(value.toLowerCase());
};
const onFavoritClick = event => {
  if (inputValue !== '' && event.target.className === 'favorite-btn') {
    // нужно добавить проверку существует ли такой город
    addFavoritCity(inputValue.toLowerCase());
  }
};
const onLocationClick = event => {
  if (event.target.className === 'target__city-btn') {
    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      const { latitude, longitude } = coords;

      const resolt = await geoLocationByCoords(latitude, longitude);
      console.log(resolt);
      console.log(targetGeoCity);

      localStorage.setItem(targetGeoCity, resolt);
    });
  }
};
const onInput = event => {
  inputValue = event.target.value;
};
const input = document.querySelector('.search-form');

input.addEventListener('submit', onSubmit);
input.addEventListener('input', onInput);
input.addEventListener('click', onFavoritClick);
input.addEventListener('click', onLocationClick);
export default {
  onSubmit,
  onFavoritClick,
  onLocationClick,
  onInput,
};
