export const createWeatherNowContent = ({ main, sys, name, weather }) => {
  const content = /*html*/ ` <div class="location">
       <img src="http://openweathermap.org/img/wn/${
         weather[0].icon
       }@2x.png" alt="" class="weather-img">
       <p class="weather__list-city">${name}, ${sys.country}</p>
   </div>
   <div class="tempreture">
   <p class="deg-now">${Math.round(main.temp)}</p>
   <ul class="weather__list-minormax">
   <li class="weather__list-min">
   <p class="list-temp">min</p>
   <p class="list-deg">
${Math.round(main.temp_min)}<sup>&#176</sup> 
   </p>
   </li>
   <li class="weather__list-max">
   <p class="list-temp">max</p>
   <p class="list-deg">
     ${Math.round(main.temp_max)} <sup>&#176</sup> 
   </p>
 
   </li>
   </ul>
   </div>`;
  return content;
};
