import { keys } from './keys';
import axios from 'axios';
import { renderHomePage } from './homePage';
const { weaterKey } = keys;

const baseUrl = `https://api.openweathermap.org/data/2.5/weather?`;
const searchParams = new URLSearchParams({
  units: 'metric',
  exclude: 'current',
  lang: 'en',
  appid: weaterKey,
});

export async function fetchWeather(name) {
  const url = `${baseUrl}q=${name}&${searchParams}`;
  try {
    const { data } = await axios.get(url);
    renderHomePage(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
