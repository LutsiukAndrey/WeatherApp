// https://api.opencagedata.com/geocode/v1/json?q=50.4594432%2C30.4873472&key=0edaeb3cf63b4b65a9266a2ca328c10b&pretty=1&language=en
import { keys } from './keys';
const { geoKey, targetCityKey } = keys;
import axios from 'axios';
export async function geoLocationByCoords(lat, lon) {
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}%2C${lon}&key=${geoKey}&pretty=1&language=en`;
  try {
    const { data } = await axios.get(url);

    const geoCity = data.results[0].components.city;

    console.log(geoCity);
    localStorage.setItem(targetCityKey, geoCity);
    return geoCity;
  } catch (error) {}
}
// `https://api.opencagedata.com/geocode/v1/json?q=${lat}%2C${lon}&key=${geoKey}&pretty=1&language=en`
