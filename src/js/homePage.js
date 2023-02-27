import { onSubmit } from './input';
import { fetchBcgImg } from './changeBcg';
import { geoLocationByCoords } from './getLocationByCoords';
import { keys } from './keys';
const { targetCityKey, favoritCityKey } = keys;
const input = document.querySelector('.search-form');
let inputValue = '';
input.addEventListener('submit', onSubmit);
const onFavoritClick = event => {
  if (inputValue !== '' && event.target.className === 'favorite-btn') {
    // нужно добавить проверку существует ли такой город
    localStorage.setItem(favoritCityKey, inputValue.toLowerCase());
  }
};
const onLocationClick = event => {
  if (event.target.className === 'target__city-btn') {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;

      console.log(geoLocationByCoords(latitude, longitude));
    });
  }
};
const onInput = event => {
  inputValue = event.target.value;
};
input.addEventListener('input', onInput);
input.addEventListener('click', onFavoritClick);
input.addEventListener('click', onLocationClick);

const targetCity = localStorage.getItem(targetCityKey);
if (targetCity) {
  fetchBcgImg(targetCity);
}
