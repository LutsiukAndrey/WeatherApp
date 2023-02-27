import { ApiKeys } from './apiKeys';

import axios from 'axios';
const background = document.querySelector('body');

export async function fetchBcgImg(search) {
  const url = `https://pixabay.com/api/?key=${ApiKeys.pixabayKey}&q=${search}&image_type=photo&pretty=true&per_page=10&page=1&safesearch=true`;
  try {
    const { data } = await axios.get(url);

    changeBcgImg(data);
  } catch (error) {}
}
const changeBcgImg = data => {
  const img = data.hits[Math.floor(Math.random() * 10)].largeImageURL;
  background.style.backgroundImage = `url(${img})`;
};
