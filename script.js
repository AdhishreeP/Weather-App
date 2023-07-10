const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b16ed965c2msh920ce0e91c21ccbp1598ebjsn3478e640852c',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

const cities = [
  'shanghai',
  'boston',
  'lucknow',
  'mumbai',
  'kolkata',
  'hyderabad'
];

const getAllWeather = (city) => {
  fetch(`${url}?city=${city}`, options)
    .then(response => response.json())
    .then((response) => {
      const {
        cloud_pct,
        feels_like,
        humidity,
        max_temp,
        min_temp,
        sunrise,
        sunset,
        temp,
        wind_degrees,
        wind_speed
      } = response;

      document.getElementById(`cloud_pct_${city}`).textContent = cloud_pct;
      document.getElementById(`feels_like_${city}`).textContent = feels_like;
      document.getElementById(`humidity_${city}`).textContent = humidity;
      document.getElementById(`max_temp_${city}`).textContent = max_temp;
      document.getElementById(`min_temp_${city}`).textContent = min_temp;
      document.getElementById(`sunrise_${city}`).textContent = sunrise;
      document.getElementById(`sunset_${city}`).textContent = sunset;
      document.getElementById(`temp_${city}`).textContent = temp;
      document.getElementById(`wind_degrees_${city}`).textContent = wind_degrees;
      document.getElementById(`wind_speed_${city}`).textContent = wind_speed;
    })
    .catch(err => console.error(err));
};

window.onload = () => {
  cities.forEach(city => {
    getAllWeather(city);
  });

  const defaultCity = 'Aurangabad';
  getWeather(defaultCity);

};

const getWeather = (city) => {
    cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
    })
    .catch(err => console.error(err));
}

submit.addEventListener("click", (e)=> {
    e.preventDefault()
    getWeather(city.value)
})

const city1 = document.getElementById('city1');
const city2 = document.getElementById('city2');
const city3 = document.getElementById('city3');

city1.addEventListener('click', (e) => {
  e.preventDefault();
  const city = e.target.textContent;
  getWeather(city);
});

city2.addEventListener('click', (e) => {
  e.preventDefault();
  const city = e.target.textContent;
  getWeather(city);
});

city3.addEventListener('click', (e) => {
  e.preventDefault();
  const city = e.target.textContent;
  getWeather(city);
});





