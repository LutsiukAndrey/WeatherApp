import { onSubmit } from './header';
import { fetchBcgImg } from './changeBcg';
import { keys } from './keys';

const { targetCityKey } = keys;

const targetCity = localStorage.getItem(targetCityKey);
if (targetCity) {
  fetchBcgImg(targetCity);
}
