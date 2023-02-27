import { fetchBcgImg } from './changeBcg';
import { keys } from './keys';
const { targetCityKey } = keys;
export const onSubmit = event => {
  event.preventDefault();
  const { value } = event.target.query;
  localStorage.setItem(targetCityKey, value.toLowerCase());
  fetchBcgImg(value.toLowerCase());
};
