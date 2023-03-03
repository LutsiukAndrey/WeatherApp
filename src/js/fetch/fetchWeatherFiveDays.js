import { keys } from '../keys';
import axios from 'axios';

// import { createFiveDays } from '../fiveDaysMain';

const { weaterKey } = keys;

const baseUrl = `https://api.openweathermap.org/data/2.5/forecast?`;
const searchParams = new URLSearchParams({
  units: 'metric',
  exclude: 'current',
  lang: 'en',
  appid: weaterKey,
});

export async function fetchWeatherFiveDays(name) {
  const url = `${baseUrl}q=${name}&${searchParams}`;
  try {
    const { data } = await axios.get(url);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
