const weatherFiveDaysList = document.querySelector('.fiveDays__weather-list');
export const renderFiveDaysItem = data => {
  const fiveDaysItem = data
    .map(item => {
      return `<li class="fiveDays__weather-item">
              <h3 class="fiveDays__weather-name-day">Sunday</h3>
              <p class="fiveDays__weather-date">
                <span class="date-num">09 &nbsp</span
                ><span class="date-name">Feb</span>
              </p>
              <img
                src="./images/loudy.png"
                alt=""
                class="fiveDays__weather-img"
              />
              <div class="fiveDays__tempreture">
           
                    <ul class="fiveDays__weather__list-minormax">
                      <li class="fiveDays__weather__list-min">
                        <p class="fiveDays__list-temp">min</p>
                        <p class="fiveDays__list-deg">
                   -2 &#176
                        </p>
                        </li>
                      <li class="fiveDays__weather__list-max">
                        <p class="fiveDays__list-temp">max</p>
                        <p class="fiveDays__list-deg">
                          1 &#176
                        </p>
                  
                    </li>
                    </ul>
                  </div>
                  <button type="button" class="more-info">more info</button>
            </li>     
 `;
    })
    .join('');

  weatherFiveDaysList.insertAdjacentHTML('beforeend', fiveDaysItem);
};
