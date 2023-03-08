import { DateTime } from 'luxon';

const weatherFiveDaysList = document.querySelector('.fiveDays__weather-list');
const fiveDaysList = document.querySelector('.fiveDays__weather-list');
const detailedList = document.querySelector('.detailedList');

function hourConverter(UNIX) {
  let newDate = new Date(UNIX * 1000);
  let hour =
    newDate.getUTCHours() < 10
      ? '0' + newDate.getUTCHours()
      : newDate.getUTCHours();
  let min =
    newDate.getMinutes() < 10
      ? '0' + newDate.getUTCMinutes()
      : newDate.getUTCMinutes();
  let CurrentHour = `${hour}:${min}`;
  return CurrentHour;
}

export const renderFiveDaysItem = data => {
  let index = 0;
  const fiveDaysItem = data
    .map(({ dayName, monthName, dayNum, tempreture, icon }) => {
      index += 1;
      return /*html*/ `<li class="fiveDays__weather-item">
              <h3 class="fiveDays__weather-name-day">${dayName}</h3>
              <p class="fiveDays__weather-date">
                <span class="date-num">${dayNum} &nbsp</span
                ><span class="date-name">${monthName}</span>
              </p>
              <img
                src="http://openweathermap.org/img/wn/${icon}@2x.png"
                alt=""
                class="fiveDays__weather-img"
              />
              <div class="fiveDays__tempreture">
           
                    <ul class="fiveDays__weather__list-minormax">
                      <li class="fiveDays__weather__list-min">
                        <p class="fiveDays__list-temp">min</p>
                        <p class="fiveDays__list-deg">
                  ${tempreture.tempMin} &#176
                        </p>
                        </li>
                      <li class="fiveDays__weather__list-max">
                        <p class="fiveDays__list-temp">max</p>
                        <p class="fiveDays__list-deg">
                          ${tempreture.tempMax} &#176
                        </p>
                  
                    </li>
                    </ul>
                  </div>
                  <button type="button" class="more-info" id='${
                    index - 1
                  }'>more info</button>
            </li>     
 `;
    })
    .join('');

  weatherFiveDaysList.insertAdjacentHTML('beforeend', fiveDaysItem);

  const detailedWeatherList = data => {
    const detaildItem = data
      .map(({ main, wind, weather, dt }) => {
        /*html*/
        return ` <li class="fiveDays__more-item">
<p class="more_time">${hourConverter(dt)}</p>
<img src='http://openweathermap.org/img/wn/${
          weather[0].icon
        }@2x.png' alt="" class="more-img">
<p class="more-tempreture">${Math.round(main.temp)} &#176</p>
<p class="more-speed"><img src="https://cdn-icons-png.flaticon.com/512/2770/2770339.png" alt="" class="speed-img">${
          main.pressure
        }mm</p>
<p class="more-humidity"><img src="https://cdn-icons-png.flaticon.com/512/8923/8923419.png" alt="" class="humidity-img"> ${
          main.humidity
        }%</p>
<p class="more-wind"><img src="https://cdn-icons-png.flaticon.com/512/615/615486.png" alt="" class="wind-img"> ${
          wind.speed
        } m/s</p>
</li>`;
      })
      .join('');
    const detailedList = /*html*/ `
    <ul class="fiveDays__more-list">
${detaildItem}
</ul>
<button class='button_more_next'> next</button>
    `;
    return detailedList;
  };

  fiveDaysList.addEventListener('click', event => {
    if (event.target.className === 'more-info') {
      const index = event.target.id;
      detailedList.innerHTML = detailedWeatherList(data[index].forecast);
    }
  });
};
