import { fetchBcgImg } from './changeBcg';
import { keys } from './keys';
import { addRemoveFavoritCity } from './addRemoveFavoritCitys';
import { geoLocationByCoords } from './getLocationByCoords';
import { renderFavoritBtn } from './render js/renderFavoritBtn';
const { targetCityKey, targetGeoCity, favoritCityKey } = keys;
const input = document.querySelector('.search-form');
const favoritCityBtn = document.querySelector('.favorit__city');

let inputValue = '';
//
//
//
// норм так?
function initPage() {
  const favoritCity = localStorage.getItem(favoritCityKey);
  const parsedFavoritCity = JSON.parse(favoritCity);
  if (favoritCity) {
    renderFavoritBtn(parsedFavoritCity);
  }
}
initPage();
//
//
//
const onSubmit = event => {
  event.preventDefault();
  const { value } = event.target.query;
  localStorage.setItem(targetCityKey, value.toLowerCase());
  fetchBcgImg(value.toLowerCase());
};
const onClickForm = event => {
  if (inputValue !== '' && event.target.className === 'favorite-btn') {
    // нужно добавить проверку существует ли такой город
    addRemoveFavoritCity(inputValue.toLowerCase());
  }
  if (event.target.className === 'target__city-btn') {
    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      const { latitude, longitude } = coords;

      const resolt = await geoLocationByCoords(latitude, longitude);

      localStorage.setItem(targetGeoCity, resolt);
    });
  }
};

const onInput = event => {
  inputValue = event.target.value;
};
const onRemoveClick = event => {
  if (event.target.className === 'delete-city') {
    addRemoveFavoritCity(event.target.id);
  }
};
favoritCityBtn.addEventListener('click', onRemoveClick);

input.addEventListener('submit', onSubmit);
input.addEventListener('input', onInput);
input.addEventListener('click', onClickForm);
export default {
  onSubmit,
  onClickForm,
  onInput,
};
