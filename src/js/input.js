import { fetchBcgImg } from './changeBcg';
export const onSubmit = event => {
  event.preventDefault();
  const { value } = event.target.query;
  fetchBcgImg(value.toLowerCase());
};
fetchBcgImg('kyiv');
