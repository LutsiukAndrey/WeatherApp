import { keys } from './keys';

const { favoritCityKey } = keys;

let favoritCitys = [];

const addedFavoritCity = localStorage.getItem(favoritCityKey);
const parsedCitys = JSON.parse(addedFavoritCity);
console.log();
if (parsedCitys) {
  favoritCitys = [...parsedCitys];
}

export const addFavoritCity = name => {
  console.log(favoritCitys);
  favoritCitys.push(name);
  localStorage.setItem(favoritCityKey, JSON.stringify(favoritCitys));
  console.log(favoritCitys);
};
