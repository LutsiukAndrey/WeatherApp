import { keys } from './keys';

import axios from 'axios';
const background = document.querySelector('body');

export async function fetchBcgImg(search) {
  const url = `https://pixabay.com/api/?key=${keys.pixabayKey}&q=building+${search}&image_type=photo&pretty=true&page=1&safesearch=true`;
  try {
    const { data } = await axios.get(url);

    changeBcgImg(data);
  } catch (error) {}
}
const changeBcgImg = data => {
  const img =
    data.hits[Math.floor(Math.random() * data.hits.length)].largeImageURL;
  if (data.hits.length > 0) {
    background.style.backgroundImage = `url(${img})`;
  }
};
