import { fetchBcgImg } from './changeBcg';
import { keys } from './keys';
import '../js/header';

const { targetCityKey } = keys;
const fiveDaysPage = document.querySelector('.five-days-section');
export const createFiveDays = data => {
  console.log(data);
};
if (fiveDaysPage) {
  console.log('Five Days');
}
