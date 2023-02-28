import { keys } from './keys';
import { renderFavoritBtn } from './render js/renderFavoritBtn';

const { favoritCityKey } = keys;

let favoritCitys = [];

const addedFavoritCity = localStorage.getItem(favoritCityKey);
const parsedCitys = JSON.parse(addedFavoritCity);
console.log();
if (parsedCitys) {
  favoritCitys = [...parsedCitys];
}

const addRemoveFavoritCity = name => {
  if (!favoritCitys.includes(name)) {
    favoritCitys.push(name);
    localStorage.setItem(favoritCityKey, JSON.stringify(favoritCitys));
    renderFavoritBtn(favoritCitys);
    return;
  } else {
    const index = favoritCitys.indexOf(name);
    favoritCitys.splice(index, 1);
    localStorage.setItem(favoritCityKey, JSON.stringify(favoritCitys));
    renderFavoritBtn(favoritCitys);
  }
};

export { addRemoveFavoritCity };
